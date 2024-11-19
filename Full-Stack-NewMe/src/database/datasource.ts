import "reflect-metadata";
import { DataSource } from "typeorm";
import { configs } from "../config/env.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: configs.database.POSTGRES_HOST,
  port: configs.database.POSTGRES_PORT,
  username: configs.database.POSTGRES_DB,
  password: configs.database.POSTGRES_PASSWORD,
  database: configs.database.POSTGRES_DB,
  // entities:[]
  synchronize: true,
  logging: true,
});

export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error in Connecting to Database", error);
  }
};
