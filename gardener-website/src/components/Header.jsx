import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import "./../styles/Header.css";

const Header = () => (
  <header className="header">
    <h1 className="logo">Gardener Services</h1>
    <nav className="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/booking" className="nav-link">Book Service</Link>
      <Link to="/admin" className="nav-link">Admin</Link>
    </nav>
    <LanguageSwitcher />
  </header>
);

export default Header;
