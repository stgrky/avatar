import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import "./style.scss";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid User Credentials") {
      setAlert(error, "danger");
      clearErrors();
    } else if (error === "Invalid Password Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Fill in all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="tg-login__card-container">
      <div className="tg-login__card">
        <span className="text-primary"> Account Login</span>
        <form className="tg-login__input-fields" onSubmit={onLogin}>
          <div className="form-group">
            <br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
              className="tg-login__input"
              required
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
              required
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
