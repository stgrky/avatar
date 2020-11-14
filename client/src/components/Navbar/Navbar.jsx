import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Navbar = ({ title }) => {
  return (
    <div className="pc-navbar__container bg-primary">
      <div className="pc-navbar__title">{title}</div>
      <ul className="pc-navbar__list">
          <li className="pc-navbar__items">
            <Link to="/">Home</Link>
          </li>
          <li className="pc-navbar__items">
            <Link to="/about">About</Link>
          </li>
          <li className="pc-navbar__items">
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
