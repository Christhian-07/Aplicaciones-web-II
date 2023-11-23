import { CreateServiceDto, UpdateServiceDto } from '../dtos';
import {ServiceEntity } from '../entities/service.entity';



export abstract class ServiceDatasource {

  abstract create( createServiceDto: CreateServiceDto ): Promise<ServiceEntity>;

  abstract getAll(): Promise<ServiceEntity[]>;

  abstract findById( id: number ): Promise<ServiceEntity>;
  abstract updateById( updateServiceDto: UpdateServiceDto ): Promise<ServiceEntity>;
  abstract deleteById( id: number ): Promise<ServiceEntity>;

}