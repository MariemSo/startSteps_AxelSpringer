import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { configs } from "../config/env.js";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).send({ message: "no auth token provided!" });
    return;
  }
  try {
    if (!configs.auth.JWT_SECRET) {
      throw new Error("Error in generating token"); // use throw to send it to the catch block -- used in server Error
    }
    jwt.verify(token, configs.auth.JWT_SECRET, (error, decode) => {
      if (error) {
        res.status(401).send({ message: "Invalid Token" });
        return;
      }
      req.user = decode as { id: number };
    });
    next();
  } catch (error) {
    res.status(500).send({ message: "A server Error ", error });
  }
};

export default { authMiddleware };
