const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

// Получить все заявки
router.get("/", async (req, res) => {
  const reservations = await Reservation.find();
  res.json(reservations);
});

// Создать новую заявку
router.post("/", async (req, res) => {
  const reservation = new Reservation(req.body);
  await reservation.save();
  res.json(reservation);
});

// Подтвердить заявку
router.put("/:id/confirm", async (req, res) => {
  const reservation = await Reservation.findByIdAndUpdate(
    req.params.id,
    { status: "confirmed" },
    { new: true }
  );
  res.json(reservation);
});

// Удалить заявку
router.delete("/:id", async (req, res) => {
  await Reservation.findByIdAndDelete(req.params.id);
  res.json({ message: "Reservation deleted" });
});

module.exports = router;
