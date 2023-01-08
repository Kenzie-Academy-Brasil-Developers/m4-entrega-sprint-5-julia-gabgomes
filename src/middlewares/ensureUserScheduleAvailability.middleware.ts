import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import AppError from "../errors/AppError";

const ensureUserScheduleAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const foundSchedule = await AppDataSource.getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.schedules", "schedule")
    .where("user.id = :id", { id: req.user.id })
    .andWhere("schedule.date = :date", { date: req.body.date })
    .andWhere("schedule.hour = :hour", { hour: `${req.body.hour}:00` })
    .getOne();

  if (!foundSchedule) {
    next();
  } else {
    throw new AppError("User schedule already exists", 409);
  }
};

export default ensureUserScheduleAvailabilityMiddleware;
