import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const flightSchema = Joi.object({
  origin: Joi.string().required().messages({
    "string.base": "Origin cannot be empty",
    "any.required": "Origin is required",
  }),
  destination: Joi.string().required().messages({
    "string.base": "Destination cannot be empty",
    "any.required": "Destination is required",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number",
    "any.required": "Price is required",
  }),
  userId: Joi.string().required().messages({
    "string.base": "Origin cannot be empty",
    "any.required": "Origin is required",
  }),
});

const flightValidator = (req: Request, res: Response, next: NextFunction) => {
  const { error } = flightSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error);
  }
  next();
};

export default flightValidator;
