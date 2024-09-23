import express from "express";
import flightsRoutes from "./flightRoutes.js";
import mongoose from "mongoose";
const app = express();
const Port = process.env.PORT || 3002;
app.use(express.json());
app.use("/flights", flightsRoutes);
app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .send({ message: err.message || "Something went Wrong" });
});
mongoose
    .connect("mongodb+srv://testuser:test1234@education.bsck2.mongodb.net/?retryWrites=true&w=majority&appName=education")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));
app.listen(Port, () => {
    console.log(`The User Server is running on ${Port}`);
});
