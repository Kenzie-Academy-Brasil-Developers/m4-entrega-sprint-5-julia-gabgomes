import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Property from "../entities/property.entity";
import AppError from "../errors/AppError";

const ensurePropertyScheduleAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const foundSchedule = await AppDataSource.getRepository(Property)
    .createQueryBuilder("property")
    .leftJoinAndSelect("property.schedules", "schedules")
    .where("property.id = :id", { id: req.body.propertyId })
    .andWhere("schedules.date = :date", { date: req.body.date })
    .andWhere("schedules.hour = :hour", { hour: `${req.body.hour}:00` })
    .getOne();

  if (foundSchedule) {
    console.log("found the schedule");
    throw new AppError("Property schedule already exists", 409);
  }

  next();
};

export default ensurePropertyScheduleAvailabilityMiddleware;
