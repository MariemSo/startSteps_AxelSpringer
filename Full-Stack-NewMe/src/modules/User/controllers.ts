import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../../entities/User.js";
import { AppDataSource } from "../../config/dataBase.js";
import { hash } from "crypto";

const userRepo = AppDataSource.getRepository(User);
const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await userRepo.findOneBy({ email });
    if (userExists) {
      res.status(409).send({ message: "Email is already taken" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 0);
    const user = userRepo.create({ name, email, password: hashedPassword });

    await userRepo.save(user);
    res.status(201).send({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error in Creating The User", error });
  }
  res.send("User Register Controller");
};

const login = (req: Request, res: Response) => {
  res.send("User Login Controller");
};

const profile = (req: Request, res: Response) => {};

export default { register, login, profile };
