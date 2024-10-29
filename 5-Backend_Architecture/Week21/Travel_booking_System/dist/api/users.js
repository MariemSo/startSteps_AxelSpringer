import { app, connectDB } from "../src/user-service/server.js";
export default async (req, res) => {
    await connectDB(); // Ensure database connection
    await app(req, res); // Pass request to Express app
};
