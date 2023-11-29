import { CreateCategoryDto, UpdateCategoryDto } from '../dtos';
import { CategoryEntity } from '../entities/category.entity';



export abstract class CategoryDatasource {

  abstract create( createCategoryDto: CreateCategoryDto ): Promise<CategoryEntity>;

  abstract getAll(): Promise<CategoryEntity[]>;

  abstract findById( id: number ): Promise<CategoryEntity>;
  abstract updateById( updateCategoryDto: UpdateCategoryDto ): Promise<CategoryEntity>;
  abstract deleteById( id: number ): Promise<CategoryEntity>;

}