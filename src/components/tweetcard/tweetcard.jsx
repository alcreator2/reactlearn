import '../../App.css';
import React, { Component } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

class TweetCard extends Component{
    render()
    {
        return(
            <section>
                <Row className='tweetcard'>
                    <Col lg="2">
                            <img src='logo512.png'></img>
                    </Col>
                    <Col lg="10">
                        <h5> John Smith<span className='tweetspantitle'>@john - jul 18</span></h5>
                        <article>The web as I envisaged it, we have not seen yet.</article>
                        <span className='tweetstat'>18</span>
                        <span className='tweetstat'>43</span>
                        <span className='tweetstat'>33</span>
                        <span className='tweetstat'>45</span>
                    </Col>
                </Row>
                <Row className='tweetcard'>
                    <Col lg="2">
                            <img src='logo512.png'></img>
                    </Col>
                    <Col lg="10">
                        <h5> John Smith<span className='tweetspantitle'>@john - jul 18</span></h5>
                        <article>The web as I envisaged it, we have not seen yet.</article>
                        <span className='tweetstat'>18</span>
                        <span className='tweetstat'>43</span>
                        <span className='tweetstat'>33</span>
                        <span className='tweetstat'>45</span>
                    </Col>
                </Row>

                <Row className='tweetcard'>
                    <Col lg="2">
                            <img src='logo512.png'></img>
                    </Col>
                    <Col lg="10">
                        <h5> John Smith<span className='tweetspantitle'>@john - jul 18</span></h5>
                        <article>The web as I envisaged it, we have not seen yet.</article>
                        <span className='tweetstat'>18</span>
                        <span className='tweetstat'>43</span>
                        <span className='tweetstat'>33</span>
                        <span className='tweetstat'>45</span>
                    </Col>
                </Row>

            </section>

            
        )
    }
}

export default TweetCard;