import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export const validateRequest =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    error ? res.status(400).send({ error: error.message }) : next();
  };
