import React, { useState } from "react";
import "./style.scss"

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submit");
  };

  return (
    <div className="tg-login__card-container">
      <div className="tg-login__card">
        <span className="text-primary"> Account Login</span>
        <form className="tg-login__input-fields" onSubmit={onSubmit}>
          <div className="form-group">
            <br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
              className="tg-login__input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              className="tg-login__input"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block tg-login__button"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
