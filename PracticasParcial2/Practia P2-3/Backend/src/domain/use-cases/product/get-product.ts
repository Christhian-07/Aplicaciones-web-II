import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../../repositories/product.repository';


export interface GetproductsUseCase {
  execute(): Promise<ProductEntity[]>
}


export class Getproducts implements GetproductsUseCase {
  
  constructor(
    private readonly repository: ProductRepository,
  ) {}
  
  execute(): Promise<ProductEntity[]> {
    return this.repository.getAll();
  }

}

