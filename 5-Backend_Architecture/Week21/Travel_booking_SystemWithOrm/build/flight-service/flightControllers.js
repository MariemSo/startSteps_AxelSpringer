import Flight from "./flightModels.js";
import axios from "axios";
const getAll = async (req, res) => {
    const flights = await Flight.find();
    res.status(200).send(flights);
};
const getOne = async (req, res) => {
    const flightId = req.params.id;
    try {
        const flight = await Flight.findById(flightId);
        if (!flight) {
            return res.status(404).send({ message: "Flight not found" });
        }
        res.status(200).send(flight);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const create = async (req, res) => {
    const { userId, origin, destination, price } = req.body;
    try {
        const userRequest = await axios.get(`http://localhost:${process.env.USER_SERVICES_PATH}/users/${userId}`);
        if (userRequest.status === 200) {
            const newFlight = {
                origin,
                destination,
                price,
            };
            const flight = new Flight(newFlight);
            await flight.save();
            res.status(201).send(newFlight);
        }
        else {
            return res.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "Error communication with User Service",
            error: error.message,
        });
    }
};
const remove = async (req, res) => {
    const flightId = req.params.id;
    await Flight.findByIdAndDelete(flightId);
    res.status(204).send();
};
export default { getAll, getOne, remove, create };
