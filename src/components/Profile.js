import React, { Component } from 'react';
import {Card, Button, Row, Col, Form, Container} from 'react-bootstrap';

import profile_pic from "../images/IMG_1448.jpg";


export default class Profile extends Component {
   render() {
      return (
         <>
         <h1>Profile</h1>
         <br />
         <Row>
            <Col md="4" > 
               <img src={profile_pic} style={{width: '80%'}} alt="profile"/>
               <Container style={{marginTop: '2%'}}>
                  <h3>Firstname Lastname</h3>
                  <p>
                     This is my bio.This is my bio. This is my bio.
                     This is my bio.This is my bio. This is my bio.
                     This is my bio.This is my bio. This is my bio.
                  </p>
               </Container>
            </Col>
            <Col md="8">
               <Container >
                  <h2>About Me</h2>
                  <Card style={{ width: 'auto' }}>
                     <Row>
                     {/* <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C560BAQGcjePf68fqOQ/company-logo_200_200/0?e=2159024400&v=beta&t=nOQuMuG7MZCKUwAaJBl-pjd8tlG500ndhyyHIz_Q-E4" style={{ width: '30vh'}}/> */}
                     <Card.Body style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%'}}>
                        <Card.Text>
                           This is the about me section of the profile information page.
                           This is the about me section of the profile information page.
                           This is the about me section of the profile information page.
                           This is the about me section of the profile information page.
                        </Card.Text>
                     </Card.Body>
                     </Row>
                  </Card>
               </Container>
               <Container style={{marginTop: '5%'}}>
               <h2>Experiences</h2>
                  <Card style={{ width: 'auto' }}>
                     <Row>
                     {/* <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C560BAQGcjePf68fqOQ/company-logo_200_200/0?e=2159024400&v=beta&t=nOQuMuG7MZCKUwAaJBl-pjd8tlG500ndhyyHIz_Q-E4" style={{ width: '30vh'}}/> */}
                     <Card.Body style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%'}}>
                        <Card.Title>Experience 1 Organization/Company/School</Card.Title>
                        <Card.Text>
                           Experience Title
                        </Card.Text>
                        <Card.Text>
                           Experience Location
                        </Card.Text>
                        <Card.Text>
                           Experience Time Range
                        </Card.Text>
                     </Card.Body>
                     </Row>
                  </Card>
                  <br />
                  <Card style={{ width: 'auto' }}>
                     <Row>
                     {/* <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C560BAQGcjePf68fqOQ/company-logo_200_200/0?e=2159024400&v=beta&t=nOQuMuG7MZCKUwAaJBl-pjd8tlG500ndhyyHIz_Q-E4" style={{ width: '30vh'}}/> */}
                     <Card.Body style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%'}}>
                        <Card.Title>Experience 2 Organization/Company/School</Card.Title>
                        <Card.Text>
                           Experience Title
                        </Card.Text>
                        <Card.Text>
                           Experience Location
                        </Card.Text>
                        <Card.Text>
                           Experience Time Range
                        </Card.Text>
                     </Card.Body>
                     </Row>
                  </Card>
               </Container>
               <Container style={{marginTop: '5%'}}>
                  <h2>Skills</h2>
                  <Card style={{ width: 'auto' }}>
                     <Row>
                     {/* <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C560BAQGcjePf68fqOQ/company-logo_200_200/0?e=2159024400&v=beta&t=nOQuMuG7MZCKUwAaJBl-pjd8tlG500ndhyyHIz_Q-E4" style={{ width: '30vh'}}/> */}
                     <Card.Body style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%'}}>
                        <Card.Title>Skill 1</Card.Title>
                        <Card.Text>
                           Skill 1 info
                        </Card.Text>
                        <Card.Text>
                           Time duration of experience
                        </Card.Text>
                     </Card.Body>
                     </Row>
                  </Card>
                  <br />
                  <Card style={{ width: 'auto' }}>
                     <Row>
                     {/* <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C560BAQGcjePf68fqOQ/company-logo_200_200/0?e=2159024400&v=beta&t=nOQuMuG7MZCKUwAaJBl-pjd8tlG500ndhyyHIz_Q-E4" style={{ width: '30vh'}}/> */}
                     <Card.Body style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%'}}>
                        <Card.Title>Skill 2</Card.Title>
                        <Card.Text>
                           Skill 2 info
                        </Card.Text>
                        <Card.Text>
                           Time duration of experience
                        </Card.Text>
                     </Card.Body>
                     </Row>
                  </Card>
               </Container>
            </Col>
         </Row>
         </>
      );
   }
}
