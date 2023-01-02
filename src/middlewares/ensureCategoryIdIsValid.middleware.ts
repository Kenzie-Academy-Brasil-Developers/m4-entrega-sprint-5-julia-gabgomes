import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Category from "../entities/category.entity";
import AppError from "../errors/AppError";

const ensureCategoryIdIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idToFind = req.params.id;

  const userRepository = AppDataSource.getRepository(Category);
  const foundCategory = await userRepository.findOneBy({ id: idToFind });

  if (!foundCategory) {
    throw new AppError("Category doesn't exist", 404);
  }

  req.category = foundCategory;

  next();
};

export default ensureCategoryIdIsValidMiddleware;
