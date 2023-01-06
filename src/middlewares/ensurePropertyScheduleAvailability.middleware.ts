import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Property from "../entities/property.entity";

const ensurePropertyScheduleAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body.propertyId);

  //   const foundProperty = await AppDataSource.getRepository(Property)
  //     .createQueryBuilder("property")
  //     .where("")
  //     .getMany();

  //   console.log(foundProperty);

  next();
};

export default ensurePropertyScheduleAvailabilityMiddleware;
