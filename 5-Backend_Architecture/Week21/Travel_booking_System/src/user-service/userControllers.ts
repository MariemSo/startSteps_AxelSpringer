import { Request, Response } from "express";
import User from "../Models/userModel.js";
import { queryParser } from "../utils/index.js";

const getAll = async (req: Request, res: Response) => {
  const filter = queryParser(req.query, ["name", "email"]);
  const users = await User.find(filter);
  res.status(200).send(users);
};

const getOne = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  res.status(200).send(user);
};

const create = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = new User({
    name,
    email,
  });
  await newUser.save();
  return res.status(201).send(newUser);
};

const update = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  const user = await User.findByIdAndUpdate(
    userId,
    { name, email },
    { new: true }
  );
  if (user) {
    return res.status(404).send({ message: "User not found" });
  }
};

const remove = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId);
  if (user) {
    return res.status(404).send({ message: "User not found" });
  }
  res.status(204).send();
};

export default { getOne, getAll, update, create, remove };
