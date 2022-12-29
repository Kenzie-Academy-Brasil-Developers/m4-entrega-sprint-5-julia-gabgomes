import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";

const softDeleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUser = await userRepository.findOneBy({ id: userId });

  if (foundUser?.isActive == false) {
    throw new AppError("Can't delete user", 400);
  }

  const deletedUser = userRepository.create({ ...foundUser, isActive: false });
  await userRepository.save(deletedUser);

  return 204;
};

export default softDeleteUserService;
