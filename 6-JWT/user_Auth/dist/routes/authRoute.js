"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post("/signup", authController_1.signUp);
router.post("/signin", authMiddleware_1.authenticate, authController_1.signIn);
exports.default = router;
