import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { propertyRequestSchema } from "../schemas/properties.schemas";
import ensureCategoryIdIsValidMiddleware from "../middlewares/ensureCategoryIdIsValid.middleware";
import ensureAddressAvailabilityMiddleware from "../middlewares/ensureAddressAvailability.middleware";
import {
  createPropertyController,
  getAllPropertiesController,
} from "../controllers/properties.controller";

const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureDataIsValidMiddleware(propertyRequestSchema),
  ensureCategoryIdIsValidMiddleware,
  ensureAddressAvailabilityMiddleware,
  createPropertyController
);
propertiesRoutes.get("", getAllPropertiesController);

export default propertiesRoutes;
