import { prisma } from '../../data/postgres';
import { CreateServiceDto, ServiceDatasource, ServiceEntity, UpdateServiceDto } from '../../domain';




export class ServiceDatasourceImpl implements ServiceDatasource {

  async create( createServiceDto: CreateServiceDto ): Promise<ServiceEntity> {
    const {product, ...rest} = createServiceDto
    const service= await prisma.service.create({
      data: createServiceDto!
    });

    return ServiceEntity.fromObject( service );
  }

  async getAll(): Promise<ServiceEntity[]> {
    const services = await prisma.service.findMany();
    return services.map( service => ServiceEntity.fromObject(service) );
  }

  async findById( id: number ): Promise<ServiceEntity> {
    const service = await prisma.service.findFirst({
      where: { id }
    });

    if ( !service ) throw `Service with id ${ id } not found`;
    return ServiceEntity.fromObject(service);
  }

  async updateById( updateServiceDto: UpdateServiceDto ): Promise<ServiceEntity> {
    await this.findById( updateServiceDto.id );
    
    const updatedService = await prisma.service.update({
      where: { id: updateServiceDto.id },
      data: updateServiceDto!.values
    });

    return ServiceEntity.fromObject(updatedService);
  }

  async deleteById( id: number ): Promise<ServiceEntity> {
    await this.findById( id );
    const deleted = await prisma.service.delete({
      where: { id }
    });

    return ServiceEntity.fromObject( deleted );
  }

}