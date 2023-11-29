import { CreateProductDto, ProductDatasource, ProductEntity, ProductRepository, UpdateProductDto } from '../../domain';


export class PorductRepositoryImpl implements ProductRepository {

  constructor(
    private readonly datasource: ProductDatasource,
  ) { }


  create( createProductDto: CreateProductDto ): Promise<ProductEntity> {
    return this.datasource.create( createProductDto );
  }

  getAll(): Promise<ProductEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<ProductEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateFuelDto: UpdateProductDto ): Promise<ProductEntity> {
    return this.datasource.updateById( updateFuelDto );
  }

  deleteById( id: number ): Promise<ProductEntity> {
    return this.datasource.deleteById( id );
  }

}


