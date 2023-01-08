import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Property from "../entities/property.entity";
import AppError from "../errors/AppError";

const ensurePropertyIdIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const foundProperty = await AppDataSource.createQueryBuilder()
    .select("property")
    .from(Property, "property")
    .where("property.id = :id", { id: req.body.propertyId })
    .getOne();

  if (!foundProperty) {
    throw new AppError("Property not found", 404);
  }

  next();
};

export default ensurePropertyIdIsValidMiddleware;
