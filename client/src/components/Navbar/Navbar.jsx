import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

import "./style.scss";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);

  const onLogout = () => {
    logout();
  };

  const { isAuthenticated, logout, user } = authContext;
  const authLinks = (
    <Fragment>
      <li>Logged in as {user && user.name}</li>
      <li className="tg-navbar__items">
        <Link to="/contacts">Contacts</Link>
      </li>
      <li className="tg-navbar__items">
        <Link to="/settings">Settings</Link>
      </li>
      <li className="tg-navbar__items">
        <Link onClick={onLogout} href="#!">
          Logout
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="tg-navbar__items">
        <Link to="/">Home</Link>
      </li>
      <li className="tg-navbar__items">
        <Link to="/about">About</Link>
      </li>
      <li className="tg-navbar__items">
        <Link to="/register">Register</Link>
      </li>
      <li className="tg-navbar__items">
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className="tg-navbar__container bg-light">
      <div className="tg-navbar__title">{title}</div>
      <ul className="tg-navbar__list">
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: "T-GNAR",
};

export default Navbar;
