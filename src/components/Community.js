import React, { Component } from 'react';
import {Card, Button, Row, Col, Form} from 'react-bootstrap';

export default class Community extends Component {
   render() {
      return (
         <>
         <h1>Community</h1>
         <div className="Container">
            <Form>
               <Row>
                  <Col md="10">
                     <Form.Group>
                        <Form.Control type="email" placeholder="Search posts" />
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
               <Card.Body style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%'}}>
                  <Card.Title>Title of post</Card.Title>
                  <Card.Text>
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                  </Card.Text>
                  <Card.Text>
                     <Button variant="secondary" style={{background: 'grey', marginRight:"1%"}}>❤️ Likes</Button>
                     <Button variant="secondary" style={{background: 'grey'}}>💬 Comments</Button>

                  </Card.Text>
                  
   
               </Card.Body>
               </Row>
            </Card>
            <br />
            <Card style={{ width: 'auto' }}>
               <Row>
               <Card.Body style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%'}}>
                  <Card.Title>Title of post</Card.Title>
                  <Card.Text>
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                  </Card.Text>
                  <Card.Text>
                     <Button variant="secondary" style={{background: 'grey', marginRight:"1%"}}>❤️ Likes</Button>
                     <Button variant="secondary" style={{background: 'grey'}}>💬 Comments</Button>

                  </Card.Text>
                  
   
               </Card.Body>
               </Row>
            </Card>
            <br />
            <Card style={{ width: 'auto' }}>
               <Row>
               <Card.Body style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%'}}>
                  <Card.Title>Title of post</Card.Title>
                  <Card.Text>
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                  </Card.Text>
                  <Card.Text>
                     <Button variant="secondary" style={{background: 'grey', marginRight:"1%"}}>❤️ Likes</Button>
                     <Button variant="secondary" style={{background: 'grey'}}>💬 Comments</Button>

                  </Card.Text>
                  
   
               </Card.Body>
               </Row>
            </Card>
            <br />
            <Card style={{ width: 'auto' }}>
               <Row>
               <Card.Body style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%'}}>
                  <Card.Title>Title of post</Card.Title>
                  <Card.Text>
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                     This will be the actual text of the post.
                  </Card.Text>
                  <Card.Text>
                     <Button variant="secondary" style={{background: 'grey', marginRight:"1%"}}>❤️ Likes</Button>
                     <Button variant="secondary" style={{background: 'grey'}}>💬 Comments</Button>

                  </Card.Text>
                  
   
               </Card.Body>
               </Row>
            </Card>
            <br />
            
         </div>
         </>
      );
   }
}
