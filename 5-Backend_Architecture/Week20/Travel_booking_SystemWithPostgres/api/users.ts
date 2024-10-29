import { VercelRequest, VercelResponse } from "@vercel/node";
import { app, connectToORM } from "../src/user-service/server.js";
import "reflect-metadata";

export default async (req: VercelRequest, res: VercelResponse) => {
  await connectToORM(); // Ensure database connection
  console.log("req received");
  await app(req, res); // Pass request to Express app
};
