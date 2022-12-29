import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const ensureIsAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.isAdm === false) {
    throw new AppError("Missing admin permissions", 403);
  }

  next();
};

export default ensureIsAdmMiddleware;
