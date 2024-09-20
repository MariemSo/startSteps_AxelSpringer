import { Request, Response, NextFunction } from "express";
import { validationResult, body } from "express-validator";

const userValidation = [
  body("name").isString().notEmpty().withMessage("Name is Required"),
  body("email").isEmail().notEmpty().withMessage("Email is Required"),
];
const userValidationHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send(errors);
  }
  next();
};
export default { userValidation, userValidationHandler };
