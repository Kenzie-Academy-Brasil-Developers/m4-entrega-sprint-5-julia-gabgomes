import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUser,
  IUserLogin,
  IUserUpdate,
} from "../interfaces/users";

const userRequestSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const userResponseSchema: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  isAdm: yup.boolean().notRequired(),
  isActive: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

const loginRequestSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const updateRequestSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
});

const listUsersResponseSchema: SchemaOf<IUser[]> =
  yup.array(userResponseSchema);

export {
  userRequestSchema,
  userResponseSchema,
  loginRequestSchema,
  updateRequestSchema,
  listUsersResponseSchema,
};
