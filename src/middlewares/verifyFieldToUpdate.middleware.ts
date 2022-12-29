import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const verifyFieldToUpdateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestFields = Object.keys(req.body);

  if (
    requestFields.includes("id") ||
    requestFields.includes("isAdm") ||
    requestFields.includes("isActive")
  ) {
    throw new AppError("Can't update fields 'id', 'isAdm' and 'isActive'", 401);
  }

  next();
};

export default verifyFieldToUpdateMiddleware;
