import React, { useEffect, useState } from "react";
import API from "../utils/api"; // API для работы с сервером
import "../styles/Admin.css"; // Стили для админки

const Admin = () => {
  const [reservations, setReservations] = useState([]); // Хранение заявок
  const [message, setMessage] = useState(""); // Сообщения об успехе/ошибке

  // Загрузка всех заявок при загрузке компонента
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await API.get("/reservations"); // Получение заявок с сервера
        setReservations(res.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
        setMessage("Failed to load reservations.");
      }
    };
    fetchReservations();
  }, []);

  // Подтверждение заявки
  const confirmReservation = async (id) => {
    try {
      const res = await API.put(`/reservations/${id}/confirm`); // Подтверждаем заявку на сервере
      setReservations((prev) =>
        prev.map((r) =>
          r._id === id ? { ...r, status: "confirmed" } : r
        )
      );
      setMessage("Reservation confirmed!");
    } catch (error) {
      console.error("Error confirming reservation:", error);
      setMessage("Failed to confirm the reservation.");
    }
  };

  // Удаление заявки
  const deleteReservation = async (id) => {
    try {
      await API.delete(`/reservations/${id}`); // Удаляем заявку на сервере
      setReservations((prev) => prev.filter((r) => r._id !== id)); // Удаляем заявку из состояния
      setMessage("Reservation deleted!");
    } catch (error) {
      console.error("Error deleting reservation:", error);
      setMessage("Failed to delete the reservation.");
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <p>Manage user reservations below:</p>

      {/* Сообщение об успехе или ошибке */}
      {message && <p className="admin-message">{message}</p>}

      {/* Список заявок */}
      <div className="reservation-list">
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <div key={reservation._id} className="reservation-item">
              <p>
                <strong>Name:</strong> {reservation.name}
              </p>
              <p>
                <strong>Phone:</strong> {reservation.phone}
              </p>
              <p>
                <strong>Address:</strong> {reservation.address}
              </p>
              <p>
                <strong>Service:</strong> {reservation.service}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(reservation.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {reservation.status === "pending"
                  ? "Pending"
                  : "Confirmed"}
              </p>

              {/* Кнопки подтверждения и удаления */}
              {reservation.status === "pending" && (
                <button
                  onClick={() => confirmReservation(reservation._id)}
                  className="confirm-button"
                >
                  Confirm
                </button>
              )}
              <button
                onClick={() => deleteReservation(reservation._id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No reservations found.</p>
        )}
      </div>
    </div>
  );
};

export default Admin;

