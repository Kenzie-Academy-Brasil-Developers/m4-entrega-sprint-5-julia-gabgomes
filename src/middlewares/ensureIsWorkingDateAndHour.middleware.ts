import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import DateAndTime from "../classes/dateAndHour.class";

const ensureIsWorkingDateAndHourMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newDateObject = DateAndTime.createDateObject(
    req.body.date,
    req.body.hour
  );

  const weekDay = DateAndTime.getWeekDay(newDateObject);

  if (weekDay === "Sat" || weekDay === "Sun") {
    throw new AppError("Invalid Date", 400);
  }

  const hour = DateAndTime.getHour(newDateObject);

  if (hour < "08:00" || hour > "18:00") {
    throw new AppError("Invalid hour", 400);
  }
  next();
};

export default ensureIsWorkingDateAndHourMiddleware;
