import { Router } from "express";
import {
  createScheduleController,
  getSchedulesByPropertyController,
} from "../controllers/schedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", ensureAuthMiddleware, createScheduleController);
schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  getSchedulesByPropertyController
);

export default schedulesRoutes;
