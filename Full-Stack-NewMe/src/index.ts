import express, { Request, Response } from "express";
import { configs } from "./config/env.js";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("News Aggregator API is running!");
});

app.listen(configs.PORT, () => {
  console.log(`Server running on http://localhost:${configs.PORT}`);
});
