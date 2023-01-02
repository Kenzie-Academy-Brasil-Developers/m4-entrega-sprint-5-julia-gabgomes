import { Router } from "express";
import {
  createUserController,
  listUsersController,
  softDeleteUserController,
  updateUserController,
} from "../controllers/users.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  userRequestSchema,
  updateRequestSchema,
} from "../schemas/users.schemas";
import ensureEmailAvailabilityMiddleware from "../middlewares/ensureEmailAvailability.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensureUserIdIsValidMiddleware from "../middlewares/ensureUserIdIsValid.middleware";
import verifyUserPermissionMiddleware from "../middlewares/verifyUserPermission.middleware";
import verifyFieldToUpdateMiddleware from "../middlewares/verifyFieldToUpdate.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userRequestSchema),
  ensureEmailAvailabilityMiddleware,
  createUserController
);
usersRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listUsersController
);
usersRoutes.patch(
  "/:id",
  verifyFieldToUpdateMiddleware,
  ensureDataIsValidMiddleware(updateRequestSchema),
  ensureAuthMiddleware,
  ensureUserIdIsValidMiddleware,
  verifyUserPermissionMiddleware,
  updateUserController
);
usersRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureUserIdIsValidMiddleware,
  softDeleteUserController
);

export default usersRoutes;
