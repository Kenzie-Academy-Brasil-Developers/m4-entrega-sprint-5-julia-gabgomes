import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const verifyUserPermissionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const userId = req.user.id;
  const isAdm = req.user.isAdm;

  if (isAdm || userId == id) {
    next();
  } else {
    throw new AppError("Missing adm permission", 401);
  }
};

export default verifyUserPermissionMiddleware;
