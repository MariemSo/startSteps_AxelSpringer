"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./models/User");
const connectDatabase = async () => {
    const AppDataSource = new typeorm_1.DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        // username: "your_username",
        // password: "your_password",
        // database: "marketing_platform",
        entities: [User_1.User],
        synchronize: true,
    });
    try {
        await AppDataSource.initialize();
        console.log("Database connection established successfully.");
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
    }
};
exports.connectDatabase = connectDatabase;
