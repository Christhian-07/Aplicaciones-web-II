import { CreateCategoryDto, CategoryDatasource, CategoryEntity, CategoryRepository, UpdateCategoryDto } from '../../domain';


export class CategoryRepositoryImpl implements CategoryRepository {

  constructor(
    private readonly datasource: CategoryDatasource,
  ) { }


  create( createCategoryDto: CreateCategoryDto ): Promise<CategoryEntity> {
    return this.datasource.create( createCategoryDto );
  }

  getAll(): Promise<CategoryEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<CategoryEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateCustomerDto: UpdateCategoryDto ): Promise<CategoryEntity> {
    return this.datasource.updateById( updateCustomerDto );
  }

  deleteById( id: number ): Promise<CategoryEntity> {
    return this.datasource.deleteById( id );
  }

}


