import { ICategoryRequest } from "../../interfaces/categories";
import AppDataSource from "../../data-source";
import Category from "../../entities/category.entity";
import AppError from "../../errors/AppError";

const createCategoryService = async (categoryName: ICategoryRequest) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  try {
    const createdCategory = categoryRepository.create(categoryName);
    const newCategory = await categoryRepository.save(createdCategory);

    return newCategory;
  } catch (err) {
    throw new AppError("Category already exists", 409);
    return {};
  }
};

export default createCategoryService;
