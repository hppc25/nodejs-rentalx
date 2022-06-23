import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../repositories/ICategoriesRepository';

/**
 * [x] - Set return type
 * [x] - Change return error
 * [x] - Access the repository
 */
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICreateCategoryDTO): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
