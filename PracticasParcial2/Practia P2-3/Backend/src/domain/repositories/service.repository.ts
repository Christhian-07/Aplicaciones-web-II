import {CreateServiceDto, UpdateServiceDto } from '../dtos';
import {ServiceEntity } from '../entities/service.entity';



export abstract class ServiceRepository {

  abstract create( createServiceDto: CreateServiceDto ): Promise<ServiceEntity>;

  abstract getAll(): Promise<ServiceEntity[]>;

  abstract findById( id: number ): Promise<ServiceEntity>;
  abstract updateById( updateVehicleDto: UpdateServiceDto ): Promise<ServiceEntity>;
  abstract deleteById( id: number ): Promise<ServiceEntity>;

}