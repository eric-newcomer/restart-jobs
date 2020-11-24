import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Community from "./components/Community";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/community" exact component={Community} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/settings" exact component={Settings} />
      </div>
    </Router>
  );
}

export default App;
