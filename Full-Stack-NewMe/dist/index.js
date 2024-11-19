import express from "express";
import { configs } from "./config/env.js";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("News Aggregator API is running!");
});
app.listen(configs.PORT, () => {
    console.log(`Server running on http://localhost:${configs.PORT}`);
});
