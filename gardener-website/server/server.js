const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const reservationRoutes = require("./routes/reservations");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Подключение к MongoDB
mongoose
  .connect("mongodb://localhost:27017/gardenerDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Роуты
app.use("/api/reservations", reservationRoutes);
app.use("/api/auth", authRoutes);

// Запуск сервера
app.listen(5000, () => console.log("Server running on port 5000"));
