import AppDataSource from "../../data-source";
import Category from "../../entities/category.entity";

const getAllCategoriesController = async () => {
  const categoriesRepository = AppDataSource.getRepository(Category);

  const categoriesList = await categoriesRepository.find();

  return categoriesList;
};

export default getAllCategoriesController;
