import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import AppError from "../errors/AppError";

const ensureEmailAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryRepository = AppDataSource.getRepository(User);
  const foundEmail = await queryRepository.findOneBy({ email: req.body.email });

  if (foundEmail) {
    throw new AppError("Email already registered");
  }

  next();
};

export default ensureEmailAvailabilityMiddleware;
