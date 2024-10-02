import { Request, Response } from "express";
import { Flight } from "../entities/Flights.js";
import { AppDataSource } from "../database/ormconfig.js";

const flightRepo = AppDataSource.getRepository(Flight);

const getAll = async (req: Request, res: Response) => {
  const flights = await flightRepo.find();
  res.status(200).send(flights);
};

const getOne = async (req: Request, res: Response) => {
  const flightId = parseInt(req.params.id);
  try {
    const flight = await flightRepo.findOneBy({ flight_id: flightId });
    if (!flight) {
      return res.status(404).send({ message: "Flight not found" });
    }
    res.status(200).send(flight);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req: Request, res: Response) => {
  const { origin, destination, departure_time, arrival_time, price } = req.body;
  try {
    const newFlight = flightRepo.create({
      origin,
      destination,
      departure_time,
      arrival_time,
      price,
    });
    await flightRepo.save(newFlight);
    res.status(201).send(newFlight);
  } catch (error: any) {
    return res.status(500).json({
      message: "Error communication with User Service",
      error: error.message,
    });
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { origin, destination, departure_time, arrival_time, price } =
      req.body;
    const flight = await flightRepo.findOneBy({ flight_id: id });
    if (!flight) {
      return res.status(404).send({ message: "Flight not found" });
    }
    flightRepo.merge(flight, {
      origin,
      destination,
      departure_time,
      arrival_time,
      price,
    });
    const updatedFight = await flightRepo.save(flight);
    res.status(200).send(updatedFight);
  } catch (error: any) {
    console.log(error);
    res
      .status(error.status || 500)
      .send(error.message || "Somthing went wrong");
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const flightId = req.params.id;
    const result = await flightRepo.delete(flightId); //returns the number of rows affected by the deletion , 0 means nothing was deleted
    if (result.affected === 0) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(204).send();
  } catch (error: any) {
    return res.status(500).send(error);
  }
};

export default { getAll, getOne, remove, create, updateById };
