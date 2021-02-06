import React, { useState, useContext } from "react";
import AlertContext from '../../context/alert/alertContext';
import "./style.scss";


const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

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
    if(name === '' || email === '' || password === ''){
      setAlert('Fill out all fields!!!', 'danger')
    } 
      else if (password !== password_confirm) {
        setAlert('Passwords do not match', 'danger')
    } 
      else {
        console.log('Register submit')
        }
      
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
              required
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
              className="tg-register-form__input"
              required
              minLength="6"
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
              required
              minLength="6"
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
