import { getRepository, Repository } from 'typeorm';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '@modules/cars/repositories/ICategoriesRepository';

import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  // Take it because it makes the repository run before the bank is configured
  // private static INSTANCE: CategoriesRepository;

  constructor() {
    this.repository = getRepository(Category);
  }

  /* public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  } */

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    return this.repository.find();
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
