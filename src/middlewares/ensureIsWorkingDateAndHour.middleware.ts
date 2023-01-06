import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const ensureIsWorkingDateAndHourMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const date = req.body.date.split("/");
  const hour = req.body.hour.split(":");

  const newDate = new Date(date[0], date[1] - 1, date[2], hour[0], hour[1]);

  const newDateFormatted = newDate.toString().split(" ");

  const weekDay = newDateFormatted[0];

  if (weekDay === "Sat" || weekDay === "Sun") {
    throw new AppError("Invalid Date", 400);
  }

  const newHour = newDateFormatted[4];

  const normalizeHour = newHour.replace(":", "").slice(0, 4);

  if (normalizeHour < "0800" || normalizeHour > "1800") {
    throw new AppError("Invalid hour", 400);
  }
  next();
};

export default ensureIsWorkingDateAndHourMiddleware;
