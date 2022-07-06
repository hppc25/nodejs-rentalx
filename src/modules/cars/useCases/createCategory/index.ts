import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

// To be able to control when this file will be executed
// To be able to control when this file will be executed because when it
// is out of a function  the file is imported and the code will be run and then
// getRepository run before the database itself is connected.
export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
  );

  return createCategoryController;
};
