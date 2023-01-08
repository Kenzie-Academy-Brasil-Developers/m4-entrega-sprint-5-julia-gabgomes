import { Router } from "express";
import {
  createScheduleController,
  getSchedulesByPropertyController,
} from "../controllers/schedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import scheduleRequestSchema from "../schemas/schedules.schemas";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensurePropertyIdIsValidMiddleware from "../middlewares/ensurePropertyIdIsValid.middleware";
import ensureIsWorkingDateAndHourMiddleware from "../middlewares/ensureIsWorkingDateAndHour.middleware";
import ensureScheduleAvailabilityMiddleware from "../middlewares/ensurePropertyScheduleAvailability.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(scheduleRequestSchema),
  ensureIsWorkingDateAndHourMiddleware,
  ensurePropertyIdIsValidMiddleware,
  ensureScheduleAvailabilityMiddleware,
  createScheduleController
);
schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  getSchedulesByPropertyController
);

export default schedulesRoutes;
