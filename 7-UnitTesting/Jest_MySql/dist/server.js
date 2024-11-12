"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(userRoutes_1.default);
(0, database_1.connectDatabase)()
    .then(() => {
    app.listen(3000, () => {
        console.log("Server is running on https://localhost:3000/");
    });
})
    .catch((error) => {
    console.log("Error Connecting to DB", error);
});
