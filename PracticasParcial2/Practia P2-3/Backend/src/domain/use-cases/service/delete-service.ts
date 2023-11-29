import { ServiceEntity } from '../../entities/service.entity';
import { ServiceRepository } from '../../repositories/service.repository';


export interface DeleteServiceUseCase {
  execute( id: number ): Promise<ServiceEntity>
}

export class DeleteService implements DeleteServiceUseCase {
  
  constructor(
    private readonly repository: ServiceRepository,
  ) {}
  
  execute( id: number ): Promise<ServiceEntity> {
    return this.repository.deleteById(id);
  }

}

