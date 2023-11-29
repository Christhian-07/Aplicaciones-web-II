



export class ProductEntity {

    constructor(
      public id: number,
      public name: string,
      public description: string,
      public price: number,
      public date_create?: string,
      public status?: boolean,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): ProductEntity {
      const { id,name, description, price, date_create, status } = object;
      if ( !id ) throw 'Id is required';
      if (!name)throw 'name is required';
      if ( !description ) throw 'description is required';
      if ( !price ) throw 'price is required';
      if ( !date_create ) throw 'date_create is optional';
      if ( !status ) throw 'status is optional';
  
        return new ProductEntity(id,name, description, price, date_create, status)
    }
  
  }
  
  
  