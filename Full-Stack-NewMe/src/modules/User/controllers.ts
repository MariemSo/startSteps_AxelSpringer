import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../../entities/User.js";
import { AppDataSource } from "../../config/dataBase.js";
import jwt from "jsonwebtoken";
import { configs } from "../../config/env.js";

const userRepo = AppDataSource.getRepository(User);

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await userRepo.findOneBy({ email });
    if (userExists) {
      res.status(409).send({ message: "Email is already taken" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepo.create({ name, email, password: hashedPassword });

    await userRepo.save(user);
    res.status(201).send({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error in Creating The User", error });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const userExists = await userRepo.findOneBy({ email });
    if (!userExists || !(await bcrypt.compare(password, userExists.password))) {
      res.status(400).send("Login Credential invalid");
      return;
    }
    if (!configs.auth.JWT_SECRET) {
      throw new Error("Error in generating token");
    }
    //sign= creates token (param 1. payload- param 2. secret-token )
    const token = jwt.sign({ userId: userExists.id }, configs.auth.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).send({ message: "login Successful", token });
  } catch (error) {
    res.status(500).send({ message: "Error Logging In ", error });
  }
};

const profile = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  try {
    const user = await userRepo.findOneBy({ id: userId });
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({ message: " Error in getting user Profile", error });
  }
};

export default { register, login, profile };
