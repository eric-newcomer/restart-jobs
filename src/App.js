import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';

import "./App.css";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Forum from "./components/Forum";
import Profile from "./components/Profile";
import Services from "./components/Services";
import Widgets from "./components/Widgets";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase/firebase";
import Home from "./components/Home";
import JobFeedWrapper from "./components/JobFeedWrapper";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // not logged in
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/opportunities" component={JobFeedWrapper} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/forum" component={Forum} />
            <Route path="/services" component={Services} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
