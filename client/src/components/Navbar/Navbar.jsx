import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Navbar = ({ title }) => {
  return (
    <div className="tg-navbar__container bg-light">
      <div className="tg-navbar__title">{title}</div>
      <ul className="tg-navbar__list">
        <li className="tg-navbar__items">
          <Link to="/">Home</Link>
        </li>
        <li className="tg-navbar__items">
          <Link to="/about">About</Link>
        </li>
        <li className="tg-navbar__items">
          <Link to="/contacts">Contacts</Link>
        </li>
        <li className="tg-navbar__items">
          <Link to="/register">Register</Link>
        </li>
        <li className="tg-navbar__items">
          <Link to="/login">Login</Link>
        </li>
        <li className="tg-navbar__items">
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: "T-GNAR",
};

export default Navbar;
