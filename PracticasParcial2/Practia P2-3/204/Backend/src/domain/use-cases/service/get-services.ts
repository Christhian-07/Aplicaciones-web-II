import { ServiceEntity} from '../../entities/service.entity';
import { ServiceRepository } from '../../repositories/service.repository';


export interface GetServicesUseCase {
  execute(): Promise<ServiceEntity[]>
}


export class GetServices implements GetServicesUseCase {
  
  constructor(
    private readonly repository: ServiceRepository,
  ) {}
  
  execute(): Promise<ServiceEntity[]> {
    return this.repository.getAll();
  }

}

