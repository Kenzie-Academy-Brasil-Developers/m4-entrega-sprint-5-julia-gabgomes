import AppDataSource from "../../data-source";
import Property from "../../entities/property.entity";

const getAllPropertiesService = async () => {
  const propertiesRepository = AppDataSource.getRepository(Property);

  const propertiesList = propertiesRepository.find({
    relations: { address: true, category: true },
  });

  return propertiesList;
};

export default getAllPropertiesService;
