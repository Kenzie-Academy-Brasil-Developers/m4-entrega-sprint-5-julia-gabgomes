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
import ensureIsValidIdMiddleware from "../middlewares/ensureIsValidId.middleware";
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
  ensureIsValidIdMiddleware,
  verifyUserPermissionMiddleware,
  updateUserController
);
usersRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureIsValidIdMiddleware,
  softDeleteUserController
);

export default usersRoutes;
