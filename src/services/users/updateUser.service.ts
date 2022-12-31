import { IUserUpdate, IUser } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { userResponseSchema } from "../../schemas/users.schemas";

const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUser = await userRepository.findOneBy({ id: userId });

  const updatedUser = userRepository.create({ ...foundUser, ...userData });
  const userNewData = await userRepository.save(updatedUser);

  const validatedUserData = await userResponseSchema.validate(userNewData, {
    stripUnknown: true,
  });

  return validatedUserData;
};

export default updateUserService;
