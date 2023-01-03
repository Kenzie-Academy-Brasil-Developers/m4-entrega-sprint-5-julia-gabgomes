import { Request, Response } from "express";
import createScheduleService from "../services/schedules/createSchedule.service";
import getSchedulesByPropertyService from "../services/schedules/getSchedulesByProperty.service";

const createScheduleController = async (req: Request, res: Response) => {
  await createScheduleService(req.body, req.user.id);

  return res.status(201).json({ message: "Schedule created" });
};

const getSchedulesByPropertyController = async (
  req: Request,
  res: Response
) => {
  const schedulesList = await getSchedulesByPropertyService(req.params.id);
  return res.status(200).json(schedulesList);
};

export { createScheduleController, getSchedulesByPropertyController };
