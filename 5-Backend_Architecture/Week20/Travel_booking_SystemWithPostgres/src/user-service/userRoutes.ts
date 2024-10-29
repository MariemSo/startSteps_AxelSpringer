import { Router } from "express";
import userControllers from "./userControllers.js";
import userMiddleware from "./middleware.js";

const router = Router();

router.post(
  "/",
  userMiddleware.userValidation,
  userMiddleware.userValidationHandler,
  userControllers.create
);

router.get("/", userControllers.getAll);

router.get("/:id", userControllers.getOne);

router.put("/:id", userControllers.update);

router.delete("/:id", userControllers.remove);

export default router;
