import express from "express";
import userRoutes from "./userRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// const Port = process.env.USER_SERVICES_PATH || 3001;

// app.use(express.json());
app.use("/users", userRoutes);
const connectDB = async () => {
  try {
    if (process.env.MONGODB_SERVER) {
      mongoose
        .connect(process.env.MONGODB_SERVER)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error("Could not connect to MongoDB", err));
    } else {
      console.log("Data Base URL Not found in env.file");
    }
  } catch (error) {
    console.log("Error in connecting to DB", error);
  }
};

// app.listen(Port, () => {
//   console.log(`The User Server is running on ${Port}`);
// });
export { app, connectDB };
