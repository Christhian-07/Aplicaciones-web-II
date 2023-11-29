import { CategoryEntity } from '../../entities/category.entity';
import { CategoryRepository } from '../../repositories/category.repository';


export interface DeleteCategoryUseCase {
  execute( id: number ): Promise<CategoryEntity>
}

export class DeleteCategory implements DeleteCategoryUseCase {
  
  constructor(
    private readonly repository: CategoryRepository,
  ) {}
  
  execute( id: number ): Promise<CategoryEntity> {
    return this.repository.deleteById(id);
  }

}

