import { IPropertyRequest } from "./../../interfaces/properties/index";
import AppDataSource from "../../data-source";
import Category from "../../entities/category.entity";
import AppError from "../../errors/AppError";
import Property from "../../entities/property.entity";
import Address from "../../entities/address.entity";

const createPropertyService = async (newPropertyData: IPropertyRequest) => {
  const userRepository = AppDataSource.getRepository(Category);
  const propertyCategory = await userRepository.findOneBy({
    id: newPropertyData.categoryId,
  });

  if (!propertyCategory) {
    throw new AppError("Category doesn't exist", 404);
  }

  const propertyRepository = AppDataSource.getRepository(Property);
  const addressRepository = AppDataSource.getRepository(Address);

  const createdAddress = addressRepository.create(newPropertyData.address);
  const savedAddress = await addressRepository.save(createdAddress);

  const createdProperty = propertyRepository.create({
    value: newPropertyData.value,
    size: newPropertyData.size,
    address: savedAddress,
    category: propertyCategory,
  });
  await propertyRepository.save(createdProperty);

  return createdProperty;
};

export default createPropertyService;
