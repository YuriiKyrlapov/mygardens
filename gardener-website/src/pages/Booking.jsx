import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import API from "../utils/api"; // Для работы с API
import "../styles/Booking.css"; // Стили для страницы бронирования

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: new Date(),
    service: "",
  });

  const [message, setMessage] = useState(""); // Сообщение об успешной/неудачной отправке

  // Обработчик изменения данных в форме
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/reservations", formData); // Отправляем заявку на сервер
      setMessage("Your reservation has been successfully submitted!");
      setFormData({
        name: "",
        phone: "",
        address: "",
        date: new Date(),
        service: "",
      }); // Очищаем форму после успешной отправки
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setMessage("An error occurred while submitting your reservation. Please try again.");
    }
  };

  return (
    <div className="booking-container">
      <h1>Book a Gardening Service</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />

        <label htmlFor="service">Service:</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a Service</option>
          <option value="Lawn Care">Lawn Care</option>
          <option value="Tree Trimming">Tree Trimming</option>
          <option value="Planting">Planting</option>
          <option value="Landscape Design">Landscape Design</option>
        </select>

        <label htmlFor="date">Select a Date:</label>
        <Calendar
          onChange={(date) => setFormData({ ...formData, date })}
          value={formData.date}
          minDate={new Date()} // Блокируем выбор прошедших дат
        />

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Отображение сообщения об отправке */}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Booking;
