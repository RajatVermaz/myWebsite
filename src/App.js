import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/Contact";
import Calculate from "./components/Calculate";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact Home component={Home} />
          <Route path="/calculate" Calculate component={Calculate} />
          <Route path="/contact" PlusMinus component={Contact} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
