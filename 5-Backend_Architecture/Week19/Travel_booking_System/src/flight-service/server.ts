import express from "express";
import flightsRoutes from "./flight-service.js";
const app = express();

const Port = process.env.PORT || 3002;

app.use(express.json());
app.use("/flights", flightsRoutes);

app.listen(Port, () => {
  console.log(`The User Server is running on ${Port}`);
});
