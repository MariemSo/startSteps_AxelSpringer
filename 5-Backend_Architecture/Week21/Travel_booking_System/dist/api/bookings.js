import { app, connectDB } from "../src/booking-service/index.js";
export default async (req, res) => {
    await connectDB();
    await app(req, res);
};
