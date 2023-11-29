import { ProductEntity} from "./product.entity";



export class ServiceEntity {

    constructor(
      public id: number,
      public name: string,
      public DATE_START?: string,
      public DATE_END?: string,
      public product?: ProductEntity[],
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): ServiceEntity {
      const { id, name, DATE_START, DATE_END, product} = object;
      if ( !id ) throw 'Id is required';
      if ( !name ) throw 'name is required';
      if ( !DATE_START ) throw 'date is optional';
      if ( !DATE_END ) throw 'date ID is optional';
  
        return new ServiceEntity( id, name, DATE_START, DATE_END, product)
    }
  
  }
  
  
  