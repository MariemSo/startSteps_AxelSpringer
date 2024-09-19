import { Router } from "express";
import {
  getAllPets,
  getOnePet,
  createOnePet,
  updateOnePetHappiness,
  deleteOnePet,
} from "./controller.js";
import petMiddleWare from "./middleware.js";
const router = Router();

//RESTfull API Routes
router.get("/", getAllPets);

router.get("/:id", getOnePet);

router.post("/", petMiddleWare.auth, petMiddleWare.createOnePet, createOnePet);

router.patch(
  "/:id",
  petMiddleWare.auth,
  petMiddleWare.updateOnePetHappiness,
  updateOnePetHappiness
);

router.delete("/:id", deleteOnePet);

export default router;
