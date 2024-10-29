import { app, connectToORM } from "../src/user-service/server.js";
export default async (req, res) => {
    await connectToORM(); // Ensure database connection
    await app(req, res); // Pass request to Express app
};
