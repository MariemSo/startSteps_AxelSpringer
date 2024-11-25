var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from "bcrypt";
import { User } from "../../entities/User.js";
import { AppDataSource } from "../../config/dataBase.js";
import jwt from "jsonwebtoken";
import { configs } from "../../config/env.js";
const userRepo = AppDataSource.getRepository(User);
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const userExists = yield userRepo.findOneBy({ email });
        if (userExists) {
            res.status(409).send({ message: "Email is already taken" });
            return;
        }
        const hashedPassword = yield bcrypt.hash(password, 10);
        const user = userRepo.create({ name, email, password: hashedPassword });
        yield userRepo.save(user);
        res.status(201).send({ message: "User Registered Successfully" });
    }
    catch (error) {
        res.status(500).send({ message: "Error in Creating The User", error });
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const userExists = yield userRepo.findOneBy({ email });
        if (!userExists || !(yield bcrypt.compare(password, userExists.password))) {
            res.status(400).send("Login Credential invalid");
            return;
        }
        if (!configs.auth.JWT_SECRET) {
            throw new Error("Error in generating token");
        }
        //sign= creates token (param 1. payload- param 2. secret-token )
        const token = jwt.sign({ userId: userExists.id }, configs.auth.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).send({ message: "login Successful", token });
    }
    catch (error) {
        res.status(500).send({ message: "Error Logging In ", error });
    }
});
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const user = yield userRepo.findOneBy({ id: userId });
        if (!user) {
            res.status(404).send({ message: "User not found" });
            return;
        }
        res.status(200).send({ user });
    }
    catch (error) {
        res.status(500).send({ message: " Error in getting user Profile", error });
    }
});
export default { register, login, profile };
