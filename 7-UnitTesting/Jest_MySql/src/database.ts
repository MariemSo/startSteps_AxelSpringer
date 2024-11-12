import { DataSource } from "typeorm";
import { User } from "./models/User";
import { Campaign } from "./models/Campaign";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your_username", // DB username
  password: "your_password", // DB password
  database: "your_database", // DB name
  entities: [User, Campaign],
  synchronize: true, // Be cautious with this in production (use migrations instead)
  logging: true, // Optional logging
});

export const connectDatabase = async () => {
  try {
    // Establish database connection
    await AppDataSource.initialize();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
