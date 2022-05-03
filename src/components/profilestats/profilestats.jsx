import '../../App.css';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class ProfileStats extends Component{
    render()
    {
        return(
                <section className='profilestat'>
                    <Container className='statcont'>
                        <img className='profileimg' src='kumari.jpg'></img>
                        <Row>
                            <Col lg="3"></Col>
                            <Col lg="2" className='stats'>
                                <h5>Tweets</h5>
                                <h3>51</h3>
                            </Col>
                            <Col lg="2" className='stats'>
                                <h5>Following</h5>
                                <h3>521</h3>
                            </Col>
                            <Col lg="2" className='stats'>
                                <h5>Followers</h5>
                                <h3>250</h3>
                            </Col>
                            <Col lg="2" className='stats'>
                                <h5>Likes</h5>
                                <h3>2025</h3>
                            </Col> 
                        </Row>
                    </Container>                  
                </section>
        )
    }
}

export default ProfileStats