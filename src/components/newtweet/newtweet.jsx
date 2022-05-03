import '../../App.css';
import React, { Component } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

class NewTweet extends Component{
    render()
    {
        return(
           <section className='newtweet'>
               <Row>
                   <Col lg="2">
                        <img src='logo512.png'></img>
                   </Col>
                   <Col lg="10">
                        <Form className='box'>
                            <Form.Group className="mb-3" controlId="myform.ControlTextarea1">
                                <Form.Control as="textarea" rows='3'></Form.Control>
                            </Form.Group>
                            <Button variant="info">Tweet</Button>
                        </Form>
                   </Col>
               </Row>
           </section>
        )
    }
}

export default NewTweet;