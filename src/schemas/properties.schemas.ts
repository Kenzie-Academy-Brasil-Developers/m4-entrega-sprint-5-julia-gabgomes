import { SchemaOf } from "yup";
import { IPropertyRequest } from "./../interfaces/properties/index";
import * as yup from "yup";

const propertyRequestSchema: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().positive().required(),
  size: yup.number().positive().required(),
  address: yup.object().shape({
    district: yup.string().required(),
    zipCode: yup.string().max(8).required(),
    number: yup.string(),
    city: yup.string().required(),
    state: yup.string().max(2).required(),
  }),
  categoryId: yup.string().required(),
});

export { propertyRequestSchema };
