import { CategoryEntity } from '../../entities/category.entity';
import { CategoryRepository} from '../../repositories/category.repository';


export interface GetCategoryUseCase {
  execute( id: number ): Promise<CategoryEntity>
}


export class GetCategory implements GetCategoryUseCase {
  
  constructor(
    private readonly repository: CategoryRepository,
  ) {}
  
  execute( id: number ): Promise<CategoryEntity> {
    return this.repository.findById(id);
  }

}

