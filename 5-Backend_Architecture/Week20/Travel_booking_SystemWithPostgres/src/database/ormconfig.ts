import { DataSource } from "typeorm";
import { User } from "../entities/Users.js";
import { Flight } from "../entities/Flights.js";
import { Booking } from "../entities/Booking.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "travel_management_system",
  synchronize: true,
  logging: true,
  entities: [Flight, User, Booking],
});
