import React, { Fragment, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Settings from "./components/Settings";
import Register from "./components/Register";
import Login from "./components/Login";
import Alerts from "./components/Alerts/Alerts";
import ContactsPage from "./components/Contacts/ContactsPage";
import LoggedInRoute from './components/routing/LoggedInRoute'

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {


  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="App tg-container">
                <Alerts />
                <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contacts" element={<ContactsPage/>} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
