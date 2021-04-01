import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
<<<<<<< HEAD
import Contact from "./components/Contact";
=======
>>>>>>> 747b5a3e155a5c158c33cb42cf52a17b376876a9
import Calculate from "./components/Calculate";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
<<<<<<< HEAD
          <Route path="/" exact Home component={Home} />
          <Route path="/calculate" Calculate component={Calculate} />
          <Route path="/contact" PlusMinus component={Contact} />
=======
          <Route path="/" exact component={Home} />        
          <Route path="/Calculate" Calculate component={Calculate}/>
>>>>>>> 747b5a3e155a5c158c33cb42cf52a17b376876a9
        </Switch>
      </Router>
    </>
  );
};
export default App;
