import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../repositories/ICategoriesRepository';

/**
 * [x] - Set return type
 * [x] - Change return error
 * [x] - Access the repository
 */
class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );
    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
