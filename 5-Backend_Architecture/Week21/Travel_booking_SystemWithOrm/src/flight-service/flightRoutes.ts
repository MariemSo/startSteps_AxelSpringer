import { Router } from "express";
import flightControllers from "./flightControllers.js";
import flightValidator from "./middleware.js";

const router = Router();

router.post("/", flightValidator, flightControllers.create);

router.get("/", flightControllers.getAll);

router.get("/:id", flightControllers.getOne);

router.delete("/:id", flightControllers.remove);

export default router;
