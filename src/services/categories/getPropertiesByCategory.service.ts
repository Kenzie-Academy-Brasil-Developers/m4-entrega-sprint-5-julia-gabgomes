import AppDataSource from "../../data-source";
import Category from "../../entities/category.entity";
import AppError from "../../errors/AppError";

const getPropertiesByCategoryService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const foundCategory = await categoryRepository.findOneBy({
    id: id,
  });

  if (!foundCategory) {
    throw new AppError("Category doesn't exist", 404);
  }

  const propertiesOfCategory = await categoryRepository.find({
    where: { id: id },
    relations: { properties: true },
  });

  return propertiesOfCategory[0];
};

export default getPropertiesByCategoryService;
