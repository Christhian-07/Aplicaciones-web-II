// DDD
import { Request, Response } from 'express';
import { CreateServiceDto, UpdateServiceDto } from '../../domain/dtos';
import { ServiceRepository } from '../../domain';


export class ServiceController {

  //* DI
  constructor(
    private readonly serviceRepository: ServiceRepository,
  ) { }


  public getService = async ( req: Request, res: Response ) => {
    const service = await this.serviceRepository.getAll();
    return res.json( service );
  };

  public getServiceById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const service = await this.serviceRepository.findById( id );
      res.json( service );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createVehicle = async ( req: Request, res: Response ) => {
    const [ error, createVehicleDto ] = CreateServiceDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const vehicle = await this.serviceRepository.create( createVehicleDto! );
    res.json( vehicle );

  };

  public updateVehicle = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateServiceDto ] = UpdateServiceDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedService = await this.serviceRepository.updateById( updateServiceDto! );
    return res.json( updatedService );

  };


  public deleteService = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedService = await this.serviceRepository.deleteById( id );
    res.json( deletedService );

  };



}