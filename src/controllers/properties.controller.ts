import { Request, Response } from "express";
import createPropertyService from "../services/properties/createProperty.service";
import getAllPropertiesService from "../services/properties/getAllProperties.service";

const createPropertyController = async (req: Request, res: Response) => {
  const createdProperty = await createPropertyService(req.body);

  return res.status(201).json(createdProperty);
};

const getAllPropertiesController = async (req: Request, res: Response) => {
  const propertiesList = await getAllPropertiesService();

  return res.json(propertiesList);
};

export { createPropertyController, getAllPropertiesController };
