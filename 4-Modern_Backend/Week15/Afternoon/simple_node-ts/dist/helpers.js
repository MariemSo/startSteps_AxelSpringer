"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHelloMessage = void 0;
const config_1 = require("./config");
const getHelloMessage = () => {
    return config_1.customMessage;
};
exports.getHelloMessage = getHelloMessage;
