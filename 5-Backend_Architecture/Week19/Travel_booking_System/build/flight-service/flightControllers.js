import Flight from "./flightModels.js";
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
    const { origin, destination, price } = req.body;
    const newFlight = {
        origin,
        destination,
        price,
    };
    const flight = new Flight(newFlight);
    await flight.save();
    res.status(201).send(newFlight);
};
const remove = async (req, res) => {
    const flightId = req.params.id;
    await Flight.findByIdAndDelete(flightId);
    res.status(204).send();
};
export default { getAll, getOne, remove, create };
