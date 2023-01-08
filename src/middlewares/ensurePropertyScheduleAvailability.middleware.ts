import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Property from "../entities/property.entity";
import AppError from "../errors/AppError";

const ensureScheduleAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const propertiesRepository = AppDataSource.getRepository(Property);

  const foundSchedule = await propertiesRepository
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.address", "addresses")
    .innerJoinAndSelect("properties.category", "categories")
    .innerJoinAndSelect("properties.schedules", "schedules_users_properties")
    .innerJoinAndSelect("schedules_users_properties.user", "user")
    .where("properties.id = :id", { id: req.body.propertyId })
    .getOne();

  if (!foundSchedule) {
    next();
  } else {
    throw new AppError("Property schedule already exists", 409);
  }
};

export default ensureScheduleAvailabilityMiddleware;
