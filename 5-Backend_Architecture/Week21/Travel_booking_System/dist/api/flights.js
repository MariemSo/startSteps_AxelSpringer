import { app, connectDB } from "../src/flight-service/server.js";
export default async (req, res) => {
    await connectDB(); // Ensure database connection
    await app(req, res); // Pass request to Express app
};
