import { Request, Response } from "express";
import createCategoryService from "../services/categories/createCategory.service";
import getAllCategoriesService from "../services/categories/getAllCategories.service";
// import getPropertiesByCategoryService from "../services/categories/getPropertiesByCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
  const createdCategory = await createCategoryService(req.body);

  return res.status(201).json(createdCategory);
};

const getAllCategoriesController = async (req: Request, res: Response) => {
  const categoriesList = await getAllCategoriesService();

  return res.status(200).json(categoriesList);
};

// const getPropertiesByCategoryController = async (
//   req: Request,
//   res: Response
// ) => {
//   const categoryId = req.params.id;
//   const propertiesOfCategory = await getPropertiesByCategoryService(categoryId);

//   return res.status(200).json(propertiesOfCategory);
// };

export {
  createCategoryController,
  getAllCategoriesController,
  //   getPropertiesByCategoryController,
};
