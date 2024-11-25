import jwt from "jsonwebtoken";
import { configs } from "../config/env.js";
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        res.status(401).send({ message: "no auth token provided!" });
        return;
    }
    try {
        if (!configs.auth.JWT_SECRET) {
            throw new Error("Error in generating token"); // use throw to send it to the catch block -- used in server Error
        }
        jwt.verify(token, configs.auth.JWT_SECRET, (error, decode) => {
            if (error) {
                res.status(401).send({ message: "Invalid Token" });
                return;
            }
            req.user = decode;
        });
        next();
    }
    catch (error) {
        res.status(500).send({ message: "A server Error ", error });
    }
};
export default { authMiddleware };
