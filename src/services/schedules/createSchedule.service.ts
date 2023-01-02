import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import Property from "../../entities/property.entity";
import ScheduleUserToProperty from "../../entities/scheduleUserProperty.entity";

const createScheduleService = async (scheduleData: any, idUser: any) => {
  const user = await AppDataSource.getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: idUser })
    .getOne();

  const property = await AppDataSource.getRepository(Property)
    .createQueryBuilder("property")
    .where("property.id = :id", { id: scheduleData.propertyId })
    .getOne();

  //   const createdSchedule = AppDataSource.createQueryBuilder()
  //     .insert()
  //     .into(ScheduleUserToProperty)
  //     .values([
  //       {
  //         date: scheduleData.date,
  //         hour: scheduleData.hour,
  //       },
  //     ]).execute;

  const createdSchedule = await AppDataSource.createQueryBuilder().relation();

  console.log(createdSchedule);

  return {};
};

export default createScheduleService;
