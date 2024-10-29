import { DataSource } from "typeorm";
import { User } from "../entities/Users.js";
import { Flight } from "../entities/Flights.js";
import { Booking } from "../entities/Booking.js";
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/database.db",
    synchronize: true,
    logging: true,
    entities: [Flight, User, Booking],
});
