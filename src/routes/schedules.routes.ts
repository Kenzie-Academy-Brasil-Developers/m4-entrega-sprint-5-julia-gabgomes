import { Router } from "express";
import { createScheduleController } from "../controllers/schedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const schedulesRoutes = Router();

// schedulesRoutes.post("", ensureAuthMiddleware, createScheduleController);

export default schedulesRoutes;
