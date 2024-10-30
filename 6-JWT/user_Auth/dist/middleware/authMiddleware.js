"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    var _a;
    //Checking if token Exists
    const jwtToken = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!jwtToken) {
        res.status(401).json({ message: "No token Found" });
        return;
    }
    console.log(jwtToken);
    //Verifying Token
    const JWT_SECRET = process.env.JWT_SECRET || "Tomato";
    jsonwebtoken_1.default.verify(jwtToken, JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        console.log(decoded);
        // req.userId = (decoded as any).id;
    });
    console.log("Hello from Middleware");
    next();
};
exports.authenticate = authenticate;
