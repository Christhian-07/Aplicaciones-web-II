import { CategoryEntity } from '../../entities/category.entity';
import { CategoryRepository } from '../../repositories/category.repository';


export interface GetCategorysUseCase {
  execute(): Promise<CategoryEntity[]>
}


export class GetCategorys implements GetCategorysUseCase {
  
  constructor(
    private readonly repository: CategoryRepository,
  ) {}
  
  execute(): Promise<CategoryEntity[]> {
    return this.repository.getAll();
  }

}

