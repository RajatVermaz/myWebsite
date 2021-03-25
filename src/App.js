import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import PlusMinus from "./components/PlusMinus";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route to="/" component={Home} />
          <Route to="/PlusMinus" component={PlusMinus} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
