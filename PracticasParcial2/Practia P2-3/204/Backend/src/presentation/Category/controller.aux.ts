// DDD
import { Request, Response } from 'express';
import { CreateCategoryDto, UpdateCategoryDto } from '../../domain/dtos';
import { CategoryRepository } from '../../domain';


export class CategoryController {

  //* DI
  constructor(
    private readonly categoryRepository: CategoryRepository,
  ) { }


  public getCustomers = async ( req: Request, res: Response ) => {
    const categorys = await this.categoryRepository.getAll();
    return res.json( categorys );
  };

  public getCustomerById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const category = await this.categoryRepository.findById( id );
      res.json( category );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createCategory = async ( req: Request, res: Response ) => {
    const [ error, createCategoryDto ] = CreateCategoryDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const customer = await this.categoryRepository.create( createCategoryDto! );
    res.json( customer );

  };

  public updateCustomer = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCategoryDto ] = UpdateCategoryDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedCategory = await this.categoryRepository.updateById( updateCategoryDto! );
    return res.json( updatedCategory );

  };


  public deleteCategory = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedCategory = await this.categoryRepository.deleteById( id );
    res.json( deletedCategory );

  };



}