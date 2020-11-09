import React from "react";
import PropTypes from "prop-types";
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
        </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Profile Creator",
};

export default Navbar;
