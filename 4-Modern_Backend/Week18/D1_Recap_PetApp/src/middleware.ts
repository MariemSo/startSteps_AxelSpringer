import { Request, Response } from "express";

const createOnePet = (req: Request, res: Response, next: Function) => {
  const { name, species } = req.body;
  if (!name || !species) {
    res.status(400).send("Name and Species are required");
    return;
  }
  next();
};

const updateOnePetHappiness = (req: Request, res: Response, next: Function) => {
  if (!req.body.happiness) {
    res.status(404).send("Happiness is required");
    return;
  }
  next();
};
const auth = (req: Request, res: Response, next: Function) => {
  if (req.headers.authorization !== "Bearer testPassword123") {
    res.status(401).send("Unauthorized");
    return;
  }
  next();
};
export default { createOnePet, updateOnePetHappiness, auth };
