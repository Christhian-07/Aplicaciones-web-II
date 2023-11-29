import { ProductEntity} from "./product.entity";


export class CategoryEntity {

  constructor(
    public id: number,
    public name: string,
    public description?: string,
    public product?: ProductEntity[],
  ) {}

  get Product() {
    return this.product;
  }

  public static fromObject( object: {[key: string]: any} ): CategoryEntity {
    const { id, name,description,product } = object;
    if ( !id ) throw 'Id is required';
    if ( !name ) throw 'name is required';
    if ( !description ) throw 'description is optional';

      return new CategoryEntity(id, name, description, product )
  }

}


