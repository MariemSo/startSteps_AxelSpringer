import { Request, Response } from "express";
import { User } from "../entities/Users.js";

import { AppDataSource } from "../database/ormconfig.js";

const userRepo = AppDataSource.getRepository(User);

const getAll = async (req: Request, res: Response) => {
  try {
    const users = await userRepo.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

// const getOne = async (req: Request, res: Response) => {
//   const userId = req.params.id;
//   const user = await User.findById(userId);
//   if (!user) {
//     return res.status(404).send({ message: "User not found" });
//   }
//   res.status(200).send(user);
// };

const create = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = userRepo.create({ name, email });
  await userRepo.save(user);
  return res.status(201).send(user);
};

// const update = async (req: Request, res: Response) => {
//   const userId = req.params.id;
//   const { name, email } = req.body;
//   const user = await User.findByIdAndUpdate(
//     userId,
//     { name, email },
//     { new: true }
//   );
//   if (user) {
//     return res.status(404).send({ message: "User not found" });
//   }
// };

// const remove = async (req: Request, res: Response) => {
//   const userId = req.params.id;
//   const user = await User.findByIdAndDelete(userId);
//   if (user) {
//     return res.status(404).send({ message: "User not found" });
//   }
//   res.status(204).send();
// };

export default { getAll, create };
