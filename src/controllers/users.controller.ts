import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";
import {
  listUsersResponseSchema,
  userResponseSchema,
} from "../schemas/users.schemas";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";
import softDeleteUserService from "../services/users/softDeleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;

  const newUserData = await createUserService(userData);

  const sentData = await userResponseSchema.validate(newUserData, {
    stripUnknown: true,
  });

  return res.status(201).json(sentData);
};

const listUsersController = async (req: Request, res: Response) => {
  const usersList = await listUsersService();

  const validatedUsersList = await listUsersResponseSchema.validate(usersList, {
    stripUnknown: true,
  });

  return res.json(validatedUsersList);
};

const updateUserController = async (req: Request, res: Response) => {
  const updateData: IUserUpdate = req.body;

  const updatedUser = await updateUserService(updateData, req.params.id);

  const validatedUpdatedUser = await userResponseSchema.validate(updatedUser, {
    stripUnknown: true,
  });

  return res.status(200).json(validatedUpdatedUser);
};

const softDeleteUserController = async (req: Request, res: Response) => {
  const status = await softDeleteUserService(req.params.id);
  return res.sendStatus(status);
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  softDeleteUserController,
};
