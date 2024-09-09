import { Router } from "express";
import {
  getAllPets,
  getOnePet,
  createOnePet,
  updateOnePetHappiness,
  deleteOnePet,
} from "./controller.js";

const router = Router();

//RESTfull API Routes
router.get("/", getAllPets);

router.get("/:id", getOnePet);

router.post("/", createOnePet);

router.patch("/:id", updateOnePetHappiness);

router.delete("/:id", deleteOnePet);

export default router;
