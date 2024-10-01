import mongoose, { Schema } from "mongoose";
// let flights: Flight[] = [];
const flightSchema = new Schema({
    origin: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const Flight = mongoose.model("Flight", flightSchema);
export default Flight;
