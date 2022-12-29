interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}

interface IUser {
  id?: string;
  name?: string;
  email?: string;
  isAdm?: boolean;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IUserLogin {
  email: string;
  password: string;
}

interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
}

export { IUserRequest, IUser, IUserLogin, IUserUpdate };
