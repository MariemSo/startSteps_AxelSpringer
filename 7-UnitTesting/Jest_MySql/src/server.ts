import express from "express";
import { connectDatabase } from "./database";
import dotenv from "dotenv";
import router from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/", router);

connectDatabase()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on https://localhost:3000/");
    });
  })
  .catch((error) => {
    console.log("Error Connecting to DB", error);
  });
