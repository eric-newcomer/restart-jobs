import React, { Component } from 'react';
import {Card, Button, Row, Col, Form, Container} from 'react-bootstrap';


export default class Login extends Component {
   render() {
      return (
         <>
         <Container style={{marginTop: '10%', height:"100%"}}>
            <h1>Restart Jobs</h1>
            <br/>
            <h2>Login</h2>
            <br />
            
            <Form style={{marginLeft:'25%', marginRight:'25%', marginBottom:'20%'}}>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                  </Form.Text>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
               </Form.Group>
               {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
               </Form.Group> */}
               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form>
            <br/>
         </Container>
         
         </>
      )
   }
}

