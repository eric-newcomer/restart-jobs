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
        <Link to="/" className="navbar-brand">Jails2Jobs</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Find Jobs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/community" className="nav-link">Community</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
