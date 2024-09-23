import express, { NextFunction, Request, Response } from "express";
import flightsRoutes from "./flightRoutes.js";
import mongoose from "mongoose";

const app = express();

const Port = process.env.FLIGHT_SERVICES_PATH || 3002;

app.use(express.json());
app.use("/flights", flightsRoutes);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || "Something went Wrong" });
});

if (process.env.MONGODB_SERVER) {
  mongoose
    .connect(process.env.MONGODB_SERVER)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));
} else {
  console.log("Data Base URL Not found in env.file");
}

app.listen(Port, () => {
  console.log(`The User Server is running on ${Port}`);
});