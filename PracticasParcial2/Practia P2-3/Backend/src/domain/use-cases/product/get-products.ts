import { ProductEntity} from '../../entities/product.entity';
import { ProductRepository } from '../../repositories/product.repository';


export interface GetFuelUseCase {
  execute( id: number ): Promise<ProductEntity>
}


export class Getproduct implements GetFuelUseCase {
  
  constructor(
    private readonly repository: ProductRepository,
  ) {}
  
  execute( id: number ): Promise<ProductEntity> {
    return this.repository.findById(id);
  }

}

