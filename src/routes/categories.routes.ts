import { Router } from "express";
import categoryRequestSchema from "../schemas/categories.schemas";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import {
  createCategoryController,
  getAllCategoriesController,
  //   getPropertiesByCategoryController,
} from "../controllers/categories.controller";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureDataIsValidMiddleware(categoryRequestSchema),
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  createCategoryController
);
categoriesRoutes.get("", getAllCategoriesController);
// categoriesRoutes.get("/:id/properties", getPropertiesByCategoryController);

export default categoriesRoutes;
