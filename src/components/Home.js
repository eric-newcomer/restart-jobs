import React, { Component } from 'react';
import {Card, Button, Row, Col, Form} from 'react-bootstrap';

import logo from "../images/logo192.png";

export default class Home extends Component {
   render() {
      return (
         <>
         <h1>Find Jobs</h1>
         <div className="Container">
         <Form>
            <Row>
               <Col md="10">
                  <Form.Group>
                     <Form.Control type="email" placeholder="Search for a job..." />
                  </Form.Group>
               </Col>
               <Col style={{ alignItems: "right"}}>
                  <Button variant="primary" type="submit" >
                     Search
                  </Button>
               </Col>
            </Row>
         </Form>

            <Card style={{ width: 'auto' }}>
               <Row>
               <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C560BAQGcjePf68fqOQ/company-logo_200_200/0?e=2159024400&v=beta&t=nOQuMuG7MZCKUwAaJBl-pjd8tlG500ndhyyHIz_Q-E4" style={{ width: '30vh'}}/>
               <Card.Body style={{ textAlign: 'left'}}>
                  <Card.Title>UPS</Card.Title>
                  <Card.Text>
                     Delivery Driver
                  </Card.Text>
                  <Card.Text>
                     San Luis Obispo, CA
                  </Card.Text>
                  <Button variant="primary">Apply</Button>
               </Card.Body>
               </Row>
            </Card>
            <br />
            <Card style={{ width: 'auto' }}>
               <Row>
               <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/984069063381889025/lXbz3QfR.jpg" style={{ width: '30vh'}}/>
               <Card.Body style={{ textAlign: 'left'}}>
                  <Card.Title>Spectrum</Card.Title>
                  <Card.Text>
                     Assistant Store Manager
                  </Card.Text>
                  <Card.Text>
                     San Luis Obispo, CA
                  </Card.Text>
                  <Button variant="primary">Apply</Button>
               </Card.Body>
               </Row>
            </Card>
            <br />
            <Card style={{ width: 'auto' }}>
               <Row>
               <Card.Img variant="top" src="https://www.rossstores.com/media/1138/ross_logo_fb.jpg" style={{ width: '30vh'}}/>
               <Card.Body style={{ textAlign: 'left'}}>
                  <Card.Title>Ross Stores</Card.Title>
                  <Card.Text>
                  Retail Associate
                  </Card.Text>
                  <Card.Text>
                     San Luis Obispo, CA
                  </Card.Text>
                  <Button variant="primary">Apply</Button>
               </Card.Body>
               </Row>
            </Card>
            <br />
         </div>
         
         </>
                     
      );
   }
}
