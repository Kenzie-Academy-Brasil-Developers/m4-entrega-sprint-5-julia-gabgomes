import AppDataSource from "../../data-source";
import Property from "../../entities/property.entity";
import AppError from "../../errors/AppError";

const getSchedulesByPropertyService = async (propertyId: string) => {
  const foundProperty = await AppDataSource.createQueryBuilder()
    .select("property")
    .from(Property, "property")
    .where("property.id = :id", { id: propertyId })
    .getOne();

  if (!foundProperty) {
    throw new AppError("Category not found", 404);
  }

  const propertyRepository = AppDataSource.getRepository(Property);

  const propertySchedules = await propertyRepository
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.schedules", "schedules")
    .innerJoinAndSelect("properties.address", "address")
    .innerJoinAndSelect("properties.category", "category")
    .where("properties.id = :id", { id: propertyId })
    .getOne();

  return propertySchedules;
};

export default getSchedulesByPropertyService;
