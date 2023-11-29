import { prisma } from '../../data/postgres';
import { CreateCategoryDto, CategoryDatasource, CategoryEntity, UpdateCategoryDto } from '../../domain';




export class CategoryDatasourceImpl implements CategoryDatasource {

  async create( createCategoryDto: CreateCategoryDto ): Promise<CategoryEntity> {
    const { product , ...rest } =  createCategoryDto
    const category = await prisma.category.create({
      data: rest
    });

    return CategoryEntity.fromObject( category );
  }

  async getAll(): Promise<CategoryEntity[]> {
    const categorys = await prisma.category.findMany();
    return categorys.map( category => CategoryEntity.fromObject(category) );
  }

  async findById( id: number ): Promise<CategoryEntity> {
    const category = await prisma.category.findFirst({
      where: { id }
    });

    if ( !category ) throw `Category with id ${ id } not found`;
    return CategoryEntity.fromObject(category);
  }

  async updateById( updateCategoryDto: UpdateCategoryDto ): Promise<CategoryEntity> {
    await this.findById( updateCategoryDto.id );
    
    const updatedCategory = await prisma.category.update({
      where: { id: updateCategoryDto.id },
      data: updateCategoryDto!.values
    });

    return CategoryEntity.fromObject(updatedCategory);
  }

  async deleteById( id: number ): Promise<CategoryEntity> {
    await this.findById( id );
    const deleted = await prisma.category.delete({
      where: { id }
    });

    return CategoryEntity.fromObject( deleted );
  }

}