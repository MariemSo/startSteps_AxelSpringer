import { Router } from "express";
import bookingController from "./bookingsController.js";

const router = Router();

router.get("/", bookingController.get);
router.post("/", bookingController.post);
router.get("/:id", bookingController.getById);
router.put("/:id", bookingController.update);
router.delete("/:id", bookingController.remove);

export default router;
