import React from "react";

const ServiceCard = ({ image, title }) => (
  <div className="service-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default ServiceCard;
