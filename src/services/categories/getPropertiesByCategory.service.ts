import AppDataSource from "../../data-source";
import Category from "../../entities/category.entity";

const getPropertiesByCategoryService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const propertiesOfCategory = await categoryRepository.find({
    where: { id: id },
    relations: { property: true },
  });

  return propertiesOfCategory;
};

export default getPropertiesByCategoryService;
