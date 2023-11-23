import { ServiceEntity } from '../../entities/service.entity';
import { ServiceRepository } from '../../repositories/service.repository';


export interface GetServiceUseCase {
  execute( id: number ): Promise<ServiceEntity>
}


export class GetService implements GetServiceUseCase {
  
  constructor(
    private readonly repository: ServiceRepository,
  ) {}
  
  execute( id: number ): Promise<ServiceEntity> {
    return this.repository.findById(id);
  }

}

