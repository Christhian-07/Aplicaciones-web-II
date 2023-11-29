import {UpdateCategoryDto } from '../../dtos';
import { CategoryEntity } from '../../entities/category.entity';
import { CategoryRepository } from '../../repositories/category.repository';


export interface UpdateCategoryUseCase {
  execute( dto: UpdateCategoryDto): Promise<CategoryEntity>
}


export class UpdateCategory implements UpdateCategoryUseCase {
  
  constructor(
    private readonly repository: CategoryRepository,
  ) {}
  
  execute( dto: UpdateCategoryDto ): Promise<CategoryEntity> {
    return this.repository.updateById(dto);
  }

}

