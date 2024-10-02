import express from "express";
import userRoutes from "./userRoutes.js";
import { AppDataSource } from "../database/ormconfig.js";

const app = express();

app.use("/api/users", userRoutes);
const connectToORM = async () => {
  try {
    await AppDataSource.initialize();
    console.log("SQL database Connection successful");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};

export { app, connectToORM };
