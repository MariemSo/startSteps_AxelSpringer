import { Request, Response } from "express";
import petModules from "./petData.js";

const getAllPets = (req: Request, res: Response) => {
  res.json(petModules.getPets());
};

const getOnePet = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const pet = petModules.getAPet(id);
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).send(`Pet with id ${id} not found`);
  }
};

const createOnePet = (req: Request, res: Response) => {
  const { name, species } = req.body;
  // if (!name || !species) {
  //   res.status(400).send("Name and Species are required");
  //   return;
  // }
  const newPet = petModules.createPet(name, species);
  res.status(201).json(newPet);
};

const updateOnePetHappiness = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const happiness = req.body.happiness;
  const pet = petModules.updatePetHappiness(id, happiness);
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).send(`Pet with ${id} not found`);
  }
};

const deleteOnePet = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const success = petModules.deletePet(id);
  if (success) {
    res.status(204).send(success);
  } else {
    res.status(404).send(`Pet with ID ${id} not found`);
  }
};
export {
  getAllPets,
  getOnePet,
  createOnePet,
  updateOnePetHappiness,
  deleteOnePet,
};
