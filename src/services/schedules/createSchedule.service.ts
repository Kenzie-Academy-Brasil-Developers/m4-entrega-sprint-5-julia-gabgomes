import AppDataSource from "../../data-source";
import ScheduleUserToProperty from "../../entities/scheduleUserProperty.entity";

const createScheduleService = async (scheduleData: any, idUser: any) => {
  await AppDataSource.createQueryBuilder()
    .insert()
    .into(ScheduleUserToProperty)
    .values([
      {
        date: scheduleData.date,
        hour: scheduleData.hour,
        property: scheduleData.propertyId,
        user: idUser,
      },
    ])
    .execute();

  return {};
};

export default createScheduleService;
