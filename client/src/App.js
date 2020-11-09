import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"


const App = () => {
  return (
    <Router>
    <Fragment>
    <Navbar />
    <div className="App">
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/about" component={About} />
      </Switch>
    </div>
    </Fragment>
    </Router>
  );
};

export default App;
