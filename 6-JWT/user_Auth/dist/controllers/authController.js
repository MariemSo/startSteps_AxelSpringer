"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const User_1 = require("../models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); //Load environment variables to the process
const JWT_SECRET = process.env.JWT_SECRET;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        // hash the password using bcrypt
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        //create User
        const user = new User_1.User({ username, password: hashedPassword });
        //save User
        yield user.save();
        res.status(201).json({ message: "User Successfully Created" });
    }
    catch (error) {
        res.status(500).json({ message: "Error Creating User", error });
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    console.log(username, password);
    try {
        //find user in the database with username
        const user = yield User_1.User.findOne({ username });
        if (!user) {
            res.status(401).json({ message: "Invalid Credentials" });
            return;
        }
        //Check password by comparing to the hashed in DB
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "Invalid Credentials" });
            return;
        }
        //Create Json Web Token
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).json({ token });
        return;
    }
    catch (error) {
        res.status(500).json({ message: "server error", error });
        return;
    }
});
exports.signIn = signIn;
