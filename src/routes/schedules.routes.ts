import { Router } from "express";
import {
  createScheduleController,
  getSchedulesByPropertyController,
} from "../controllers/schedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensurePropertyIdIsValidMiddleware from "../middlewares/ensurePropertyIdIsValid.middleware";
import ensureIsWorkingDateAndHourMiddleware from "../middlewares/ensureIsWorkingDateAndHour.middleware";
import ensurePropertyScheduleAvailabilityMiddleware from "../middlewares/ensurePropertyScheduleAvailability.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsWorkingDateAndHourMiddleware,
  ensurePropertyIdIsValidMiddleware,
  ensurePropertyScheduleAvailabilityMiddleware,
  createScheduleController
);
schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  getSchedulesByPropertyController
);

export default schedulesRoutes;
