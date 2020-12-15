import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import Community from "./components/Community";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import UserContext from "./context/UserContext";

import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:5000/users/isTokenValid/",
        null,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      if (tokenResponse.data) {
        
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navigation />
          <br />
          {/* <Route path="/login" exact component={Login} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/community" exact component={Community} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/settings" exact component={Settings} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
