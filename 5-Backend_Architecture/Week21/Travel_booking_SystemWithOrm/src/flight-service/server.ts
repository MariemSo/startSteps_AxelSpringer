import express from "express";
import flightsRoutes from "./flightRoutes.js";
import { AppDataSource } from "../database/ormconfig.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use("/api/flights", flightsRoutes);
const connectToORM = async () => {
  try {
    await AppDataSource.initialize();
    console.log("SQL database Connection successful");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};

export { app, connectToORM };
