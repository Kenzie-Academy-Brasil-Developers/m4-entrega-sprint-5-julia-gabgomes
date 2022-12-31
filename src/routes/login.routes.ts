import { Router } from "express";
import createLoginController from "../controllers/login.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { loginRequestSchema } from "../schemas/users.schemas";

const loginRoutes = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(loginRequestSchema),
  createLoginController
);

export default loginRoutes;
