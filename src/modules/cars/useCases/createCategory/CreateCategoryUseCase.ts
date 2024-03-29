import { inject, injectable } from 'tsyringe';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '@modules/cars/repositories/ICategoriesRepository';
import { AppError } from '@shared/errors/AppError';

/**
 * [x] - Set return type
 * [x] - Change return error
 * [x] - Access the repository
 */

// Defines that the class can be injected
@injectable()
class CreateCategoryUseCase {
  constructor(
    // Inject the CategoriesRepository into the prop
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );
    if (categoryAlreadyExists) {
      throw new AppError('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
