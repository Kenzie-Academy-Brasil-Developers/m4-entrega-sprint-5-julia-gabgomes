import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Address from "../entities/address.entity";
import AppError from "../errors/AppError";

const ensureAddressAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const { district, zipCode, number, city, state } = req.body.address;

  const foundAddress = await addressRepository.findOne({
    where: {
      district: district,
      zipCode: zipCode,
      number: number,
      city: city,
      state: state,
    },
  });

  if (!foundAddress) {
    next();
  } else {
    throw new AppError("Address already registered", 409);
  }
};

export default ensureAddressAvailabilityMiddleware;
