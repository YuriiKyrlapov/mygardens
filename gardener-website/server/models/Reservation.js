const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: Date, required: true },
  service: { type: String, required: true },
  status: { type: String, enum: ["pending", "confirmed"], default: "pending" }
});

module.exports = mongoose.model("Reservation", ReservationSchema);
