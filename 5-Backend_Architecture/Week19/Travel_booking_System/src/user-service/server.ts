import express from "express";
import userRoutes from "./userRoutes.js";
const app = express();

const Port = process.env.PORT || 3001;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(Port, () => {
  console.log(`The User Server is running on ${Port}`);
});
