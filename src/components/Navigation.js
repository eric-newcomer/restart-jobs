import React, { Component } from "react";
import Link from "react-router-dom/Link";
// import {
//   Navbar,
//   // NavDropdown,
//   Nav,
//   Form,
//   FormControl,
//   Button,
// } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Restart</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Find Jobs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/community" className="nav-link">Community</Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <li className="navbar-item">
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
            <li className="navbar-item">
              <Link to="/settings" className="nav-link">Settings</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
