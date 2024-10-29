import { VercelRequest, VercelResponse } from "@vercel/node";
import { app, connectToORM } from "../src/flight-service/server.js";
import "reflect-metadata";

export default async (req: VercelRequest, res: VercelResponse) => {
  await connectToORM(); // Ensure database connection
  await app(req, res); // Pass request to Express app
};
