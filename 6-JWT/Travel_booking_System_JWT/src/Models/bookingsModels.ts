import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  flight: {
    type: mongoose.Schema.ObjectId,
    ref: "Flight",
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
