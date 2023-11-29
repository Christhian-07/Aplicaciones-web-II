import { CreateServiceDto, ServiceDatasource, ServiceEntity, ServiceRepository, UpdateServiceDto } from '../../domain';


export class ServiceRepositoryImpl implements ServiceRepository {

  constructor(
    private readonly datasource: ServiceDatasource,
  ) { }


  create( createServiceDto: CreateServiceDto ): Promise<ServiceEntity> {
    return this.datasource.create( createServiceDto );
  }

  getAll(): Promise<ServiceEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<ServiceEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateServiceDto: UpdateServiceDto ): Promise<ServiceEntity> {
    return this.datasource.updateById( updateServiceDto );
  }

  deleteById( id: number ): Promise<ServiceEntity> {
    return this.datasource.deleteById( id );
  }

}


