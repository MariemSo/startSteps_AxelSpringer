"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customMessage = exports.port = void 0;
// Import the dotenv library, which helps load environment variables from a .env file
const dotenv_1 = __importDefault(require("dotenv"));
// Call dotenv.config() to read the .env file and load the variables into process.env
dotenv_1.default.config();
// Define a constant named 'port'. It will be set to the value of the environment variable 'Port'.
// If 'Port' is not defined in the .env file, it will default to 4000.
exports.port = process.env.PORT || 4000;
exports.customMessage = process.env.CUSTOM_MESSAGE || 'Default message';
