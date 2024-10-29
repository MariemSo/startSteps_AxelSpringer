import Booking from "../Models/bookingsModels.js";
const get = async (req, res) => {
    const bookings = await Booking.find();
    res.status(200).send(bookings);
};
const post = async (req, res) => {
    const { user, flight, status } = req.body;
    const bookingDate = new Date();
    const newBooking = new Booking({ user, flight, bookingDate, status });
    await newBooking.save();
    res.status(200).send(newBooking);
};
const getById = async (req, res) => {
    const { id } = req.params;
    const booking = await Booking.findById(id).populate("user flight");
    res.status(200).send(booking);
};
const update = async (req, res) => {
    const { id } = req.params;
    const { user, flight, status } = req.body;
    const booking = await Booking.findById(id);
    if (!booking) {
        return res.status(404).send("Booking is not found");
    }
    const newBooking = await Booking.findByIdAndUpdate(id, { user, flight, status }, { new: true });
    res.status(200).send(newBooking);
};
const remove = async (req, res) => {
    const { id } = req.params;
    const booking = await Booking.findById(id);
    if (!booking) {
        return res.status(404).send("Booking Not Found");
    }
    await Booking.findByIdAndDelete(id);
    res.status(204).send();
};
export default { get, post, getById, update, remove };
