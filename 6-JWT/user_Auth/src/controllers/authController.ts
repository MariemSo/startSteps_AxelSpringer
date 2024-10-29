import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config(); //Load environment variables to the process

const JWT_SECRET = process.env.JWT_SECRET as string;
const signUp = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    // hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //create User
    const user = new User({ username, password: hashedPassword });
    //save User
    await user.save();
    res.status(201).json({ message: "User Successfully Created" });
  } catch (error) {
    res.status(500).json({ message: "Error Creating User", error });
  }
};

const signIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    //find user in the database with username
    const user = await User.findOne({ username });
    if (!user) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }

    //Check password by comparing to the hashed in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }
    //Create Json Web Token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
    return;
  } catch (error) {
    res.status(500).json({ message: "server error", error });
    return;
  }
};

export { signUp, signIn };
