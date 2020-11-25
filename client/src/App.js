import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Settings from "./components/Settings";
import Register from "./components/Register";
import Login from "./components/Login";
import Contacts from "./components/Contacts"

import ContactState from "./context/contact/ContactState";

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="App tg-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
