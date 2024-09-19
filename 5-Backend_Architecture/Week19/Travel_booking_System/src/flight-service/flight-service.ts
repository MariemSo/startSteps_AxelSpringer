import { Router } from "express";

const router = Router();

interface Flight {
  id: number;
  origin: string;
  destination: string;
  price: number;
}

let flights: Flight[] = [];

router.post("/", (req, res) => {
  const { origin, destination, price } = req.body;
  const newFlight: Flight = {
    id: flights.length + 1,
    origin,
    destination,
    price,
  };
  flights.push(newFlight);
  res.status(201).send(newFlight);
});

router.get("/", (req, res) => {
  res.status(200).send(flights);
});

router.get("/:id", (req, res) => {
  const flightId = parseInt(req.params.id);
  const flight = flights.find((f) => f.id === flightId);
  if (!flight) {
    return res.status(404).send({ message: "Flight not found" });
  }
  res.status(200).send(flight);
});

router.delete("/:id", (req, res) => {
  const flightId = parseInt(req.params.id);
  flights = flights.filter((f) => f.id !== flightId);
  res.status(204).send();
});

export default router;
