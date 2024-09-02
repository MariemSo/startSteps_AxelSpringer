"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logServerMessage = void 0;
const logServerMessage = (message) => {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp}: ${message}`);
};
exports.logServerMessage = logServerMessage;
