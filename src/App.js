import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Calculate from "./components/Calculate";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />        
          <Route path="/Calculate" Calculate component={Calculate}/>
        </Switch>
      </Router>
    </>
  );
};
export default App;
