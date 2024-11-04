import { Router } from "express";
import bookingController from "../booking-service/controller.js";
const router = Router();
router.get("/", bookingController.get);
router.post("/", bookingController.post);
router.get("/:id", bookingController.getById);
router.post("/:id", bookingController.update);
router.delete("/:id", bookingController.remove);
export default router;
