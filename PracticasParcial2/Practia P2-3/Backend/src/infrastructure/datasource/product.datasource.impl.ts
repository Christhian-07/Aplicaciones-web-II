import { prisma } from '../../data/postgres';
import { CreateProductDto, ProductDatasource, ProductEntity, UpdateProductDto } from '../../domain';




export class ProductDatasourceImpl implements ProductDatasource {

  async create( createFuelDto: CreateProductDto ): Promise<ProductEntity> {
    const product = await prisma.product.create({
      data: createFuelDto!
    });

    return ProductEntity.fromObject( product );
  }

  async getAll(): Promise<ProductEntity[]> {
    const products = await prisma.product.findMany();
    return products.map( product => ProductEntity.fromObject(product) );
  }

  async findById( id: number ): Promise<ProductEntity> {
    const product = await prisma.product.findFirst({
      where: { id }
    });

    if ( !product ) throw `Fuel with id ${ id } not found`;
    return ProductEntity.fromObject(product);
  }

  async updateById( updateProductDto: UpdateProductDto ): Promise<ProductEntity> {
    await this.findById( updateProductDto.id );
    
    const updatedProduct = await prisma.product.update({
      where: { id: updateProductDto.id },
      data: updateProductDto!.values
    });

    return ProductEntity.fromObject(updatedProduct);
  }

  async deleteById( id: number ): Promise<ProductEntity> {
    await this.findById( id );
    const deleted = await prisma.product.delete({
      where: { id }
    });

    return ProductEntity.fromObject( deleted );
  }

}