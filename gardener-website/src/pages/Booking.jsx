import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useTranslation } from "react-i18next";
import "./../styles/Booking.css";

const Booking = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: new Date(),
    addToCalendar: false,
    sendSMS: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Reservation submitted!");
  };

  return (
    <div className="booking">
      <h1>{t("booking")}</h1>
      <form onSubmit={handleSubmit}>
        <label>{t("name")}:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

        <label>{t("phone")}:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />

        <label>{t("address")}:</label>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />

        <label>{t("service")}:</label>
        <select name="service" value={formData.service} onChange={handleInputChange} required>
          <option value="">{t("service_list.lawn_care")}</option>
          <option value="tree">{t("service_list.tree_trimming")}</option>
        </select>

        <label>{t("date")}:</label>
        <Calendar
          onChange={(date) => setFormData({ ...formData, date })}
          value={formData.date}
        />

        <label>
          <input
            type="checkbox"
            name="addToCalendar"
            checked={formData.addToCalendar}
            onChange={handleInputChange}
          />
          {t("add_to_calendar")}
        </label>

        <label>
          <input
            type="checkbox"
            name="sendSMS"
            checked={formData.sendSMS}
            onChange={handleInputChange}
          />
          {t("send_sms")}
        </label>

        <button type="submit">{t("submit")}</button>
      </form>
    </div>
  );
};

export default Booking;
