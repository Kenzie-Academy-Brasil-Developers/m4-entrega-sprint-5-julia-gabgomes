import { IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const createUserService = async (userPayload: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const createdUser = userRepository.create(userPayload);
  const newUser = await userRepository.save(createdUser);

  return newUser;
};

export default createUserService;
