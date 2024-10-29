import { Request, Response } from "express";
import Flight from "../Models/flightModels.js";
import User from "../Models/userModel.js";
import axios from "axios";
import { queryParser } from "../utils/index.js";

const getAll = async (req: Request, res: Response) => {
  const filter = queryParser(req.query, ["origin", "destination"]);
  const sortByPrice = req.query.sortByPrice;
  let sortBy = {};
  if (sortByPrice) {
    sortBy = {
      price: sortByPrice,
    };
  }
  // const page = parseInt(req.query.page || 1);
  // const limit = parseInt(req.query.limit || 0);
  const flights = await Flight.find(filter).sort(sortBy);
  res.status(200).send(flights);
};

const getOne = async (req: Request, res: Response) => {
  const flightId = req.params.id;
  try {
    const flight = await Flight.findById(flightId);
    if (!flight) {
      return res.status(404).send({ message: "Flight not found" });
    }
    res.status(200).send(flight);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { origin, destination, price, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    const newFlight = {
      origin,
      destination,
      price,
    };
    const flight = new Flight(newFlight);
    await flight.save();
    res.status(201).send(newFlight);
  } catch (error: any) {
    return res
      .status(error.status || 500)
      .send({ message: error.message, userMessage: "Somthing went wrong" });
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { origin, destination, price, userId } = req.body;
    await axios.get(
      `http://localhost:${process.env.USER_SERVICES_PATH}/users/${userId}`
    );
    const updatedFight = await Flight.findByIdAndUpdate(
      id,
      {
        origin,
        destination,
        price,
      },
      { new: true }
    );
    res.status(200).send(updatedFight);
  } catch (error: any) {
    console.log(error);
    res
      .status(error.status || 500)
      .send(error.message || "Something went wrong");
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const flightId = req.params.id;
    await Flight.findByIdAndDelete(flightId);
    Flight.aggregate();
    res.status(204).send();
  } catch (error: any) {
    return res.status(500).send(error);
  }
};

const averagePrice = async (req: Request, res: Response) => {
  const groupBy = req.query.groupBy || "$origin";
  const flights = await Flight.aggregate([
    { $group: { _id: groupBy, averagePrice: { $avg: "$price" } } },
  ]);
  res.status(200).send(flights);
};

const numberOfFlights = async (req: Request, res: Response) => {
  const groupBy = req.query.groupBy || "$origin";
  const flights = await Flight.aggregate([
    { $group: { _id: groupBy, count: { $sum: 1 } } },
  ]);
  res.status(200).send(flights);
};

export default {
  getAll,
  getOne,
  remove,
  create,
  updateById,
  numberOfFlights,
  averagePrice,
};
