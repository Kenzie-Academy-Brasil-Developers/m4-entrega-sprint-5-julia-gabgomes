import AppDataSource from "../../data-source";
import Property from "../../entities/property.entity";
import Address from "../../entities/address.entity";
import { IPropertyRequest } from "./../../interfaces/properties/index";

const createPropertyService = async (
  newPropertyData: IPropertyRequest,
  propertyCategory: any
) => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const addressRepository = AppDataSource.getRepository(Address);

  const createdAddress = addressRepository.create(newPropertyData.address);
  const savedAddress = await addressRepository.save(createdAddress); //savedAddress.id

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
