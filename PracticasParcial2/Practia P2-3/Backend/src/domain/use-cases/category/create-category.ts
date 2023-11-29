import { CreateCategoryDto } from '../../dtos';
import { CategoryEntity } from '../../entities/category.entity';
import { CategoryRepository } from '../../repositories/category.repository';


export interface CreateCategoryUseCase {
  execute( dto: CreateCategoryDto ): Promise<CategoryEntity>
}

// ctrl+ shift + l
export class CreateCategory implements CreateCategoryUseCase {
  
  constructor(
    private readonly repository: CategoryRepository,
  ) {}
  
  execute( dto: CreateCategoryDto ): Promise<CategoryEntity> {
    return this.repository.create(dto);
  }

}

