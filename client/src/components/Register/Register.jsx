import React, { useState } from "react";

import "./style.scss";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const { name, email, password, password_confirm } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Register Submit");
  };

  return (
    <div className="tg-register-form__card-container">
      <div className="tg-register-form__card">
        <span className="text-primary"> Account Register</span>
        <form className="tg-register-form__input-fields" onSubmit={onSubmit}>
          <div className="form-group">
            <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Name"
              className="tg-register-form__input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
              className="tg-register-form__input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              className="tg-register-form__input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password_confirm"
              value={password_confirm}
              onChange={onChange}
              placeholder="Confirm Password"
              className="tg-register-form__input"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-primary btn-block tg-register-form__button"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
