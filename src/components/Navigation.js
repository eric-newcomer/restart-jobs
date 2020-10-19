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
            {/* <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li> */}
          </ul>
        </div>
      </nav>
      // <Navbar bg="light" expand="lg" fixed="top">
      //   <Navbar.Brand href="#home">Jails2Jobs</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Form inline className="mr-6">
      //       <FormControl
      //         type="text"
      //         placeholder="Search Jobs"
      //         className="mr-sm-2"
      //       />
      //       <Button variant="outline-success">Search</Button>
      //     </Form>
      //     <Nav className="mr-auto">
      //       <Nav.Link as={Link} to="/">
      //         Find Jobs
      //       </Nav.Link>
      //       <Nav.Link as={Link} to="/community">
      //         Community
      //       </Nav.Link>
      //     </Nav>
      //     <Nav>
      //       <Nav.Link >
      //         Profile
      //       </Nav.Link>
      //       <Nav.Link href="">Settings</Nav.Link>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>
    );
  }
}
