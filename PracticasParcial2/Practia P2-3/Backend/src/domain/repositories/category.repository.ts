import { CreateCategoryDto, UpdateCategoryDto } from '../dtos';
import { CategoryEntity } from '../entities/category.entity';



export abstract class CategoryRepository {

  abstract create( createCategoryDto: CreateCategoryDto ): Promise<CategoryEntity>;

  abstract getAll(): Promise<CategoryEntity[]>;

  abstract findById( id: number ): Promise<CategoryEntity>;
  abstract updateById( updateTodoDto: UpdateCategoryDto ): Promise<CategoryEntity>;
  abstract deleteById( id: number ): Promise<CategoryEntity>;

}