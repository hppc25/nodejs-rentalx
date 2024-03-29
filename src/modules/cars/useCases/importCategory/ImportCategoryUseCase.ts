import { parse } from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository,
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = parse({
        delimiter: ',', // default
      });

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;

          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          return resolve(categories);
        })
        .on('error', err => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async category => {
      const { name, description } = category;

      const exitsCategory = await this.categoriesRepository.findByName(name);

      if (!exitsCategory) {
        await this.categoriesRepository.create({ name, description });
      }
    });
  }
}

export { ImportCategoryUseCase };
