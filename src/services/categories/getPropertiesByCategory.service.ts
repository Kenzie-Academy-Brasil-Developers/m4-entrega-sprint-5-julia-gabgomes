// import AppDataSource from "../../data-source";
// import Category from "../../entities/category.entity";
// import Property from "../../entities/property.entity";
// import AppError from "../../errors/AppError";

// const getPropertiesByCategoryService = async (id: string) => {
//   const categoryRepository = AppDataSource.getRepository(Category);
//   const propertyRepository = AppDataSource.getRepository(Property);

//   try {
//     const categorysProperties = await propertyRepository.find({
//       relations: { category: true },
//     });
//     console.log(categorysProperties);
//     return categorysProperties;
//   } catch (error) {
//     throw new AppError("Category doesn't exist", 404);
//   }
// };

// export default getPropertiesByCategoryService;
