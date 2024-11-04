import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";
import { userSchema } from "../Models/userModel.js";
import { flightSchema } from "../Models/flightModels.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/bookings", router);
const connectDB = async () => {
    try {
        const databaseURL = process.env.MONGODB_SERVER;
        if (databaseURL) {
            await mongoose.connect(databaseURL);
            mongoose.model("User", userSchema);
            mongoose.model("Flight", flightSchema);
        }
        else {
            console.log("Connection To DB failed, No MongoDB provided");
        }
    }
    catch (error) {
        console.log("Connection To DB Failed", error);
    }
};
export { app, connectDB };
