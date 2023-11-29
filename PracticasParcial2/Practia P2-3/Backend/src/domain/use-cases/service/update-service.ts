import { UpdateServiceDto } from '../../dtos';
import { ServiceEntity } from '../../entities/service.entity';
import {ServiceRepository } from '../../repositories/service.repository';


export interface UpdateServiceUseCase {
  execute( dto: UpdateServiceDto ): Promise<ServiceEntity>
}


export class UpdateService implements UpdateServiceUseCase {
  
  constructor(
    private readonly repository: ServiceRepository,
  ) {}
  
  execute( dto: UpdateServiceDto ): Promise<ServiceEntity> {
    return this.repository.updateById(dto);
  }

}

