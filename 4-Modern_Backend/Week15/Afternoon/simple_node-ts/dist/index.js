"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'http' module, which allows you to create an HTTP server
const http_1 = __importDefault(require("http"));
//import helper Module
const helpers_1 = require("./helpers");
//import from logger
const logger_1 = require("./logger");
// Import the 'port' constant from the 'config' module. This is the port number the server will listen on
const config_1 = require("./config");
// Create an HTTP server
http_1.default.createServer((req, res) => {
    // Set the HTTP response header with status code 200 (OK) and content type as 'text/plain'
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // Send the response body with the message 'Server is running!' and end the response
    res.end((0, helpers_1.getHelloMessage)());
})
    // Make the server listen on the specified port and log a message to the console when it's ready
    .listen(config_1.port, () => (0, logger_1.logServerMessage)(`Server is running on port ${config_1.port}`));
