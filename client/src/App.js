import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Saved from "./components/Saved/Saved"

  const App = () =>
  
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/save" component={Saved} />
    </div>
  </Router>

export default App;