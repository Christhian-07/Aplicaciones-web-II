import { CreateServiceDto } from '../../dtos';
import { ServiceEntity } from '../../entities/service.entity';
import { ServiceRepository } from '../../repositories/service.repository';



export interface CreateServiceUseCase {
  execute( dto: CreateServiceDto ): Promise<ServiceEntity>
}

// ctrl+ shift + l
export class CreateService implements CreateServiceUseCase {
  
  constructor(
    private readonly repository: ServiceRepository,
  ) {}
  
  execute( dto: CreateServiceDto ): Promise<ServiceEntity> {
    return this.repository.create(dto);
  }

}

