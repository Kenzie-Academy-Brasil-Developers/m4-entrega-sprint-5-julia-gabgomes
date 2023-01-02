import { Request, Response } from "express";
import createScheduleService from "../services/schedules/createSchedule.service";

const createScheduleController = (req: Request, res: Response) => {
  const createdSchedule = createScheduleService(req.body, req.user.id);

  return res.send("deu boa até aqui");
};

export { createScheduleController };
