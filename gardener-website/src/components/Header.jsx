import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => (
  <header>
    <h1>Gardener Services</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/booking">Book Service</Link>
      <Link to="/admin">Admin</Link>
    </nav>
    <LanguageSwitcher />
  </header>
);

export default Header;
