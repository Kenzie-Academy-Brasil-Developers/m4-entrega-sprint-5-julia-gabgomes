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
    .where("user.id = :id", { id: req.body.userId })
    .andWhere("schedule.date = :date", { date: req.body.date })
    .andWhere("schedule.hour = :hour", { hour: `${req.body.hour}:00` })
    .getOne();

  console.log(foundSchedule);

  if (foundSchedule) {
    console.log("found the schedule");
    throw new AppError("User schedule already exists", 409);
  }

  next();
};

export default ensureUserScheduleAvailabilityMiddleware;
