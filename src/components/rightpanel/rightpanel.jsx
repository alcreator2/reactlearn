import '../../App.css';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class RightPanel extends Component{
    render()
    {
        return(
            <section className='rightpanel'>
                <h3>Who to follow</h3>
                <div className='list'>
                    <img src='kumari.jpg'></img>
                    <section>
                        <h5> John Smith<span className='tweetspantitle'>@john - jul 18</span></h5>
                        <Button variant="outline-info">Follow</Button>{' '}
                    </section>
                </div>
                <div className='list'>
                    <img src='kumari.jpg'></img>
                    <section>
                        <h5> John Smith<span className='tweetspantitle'>@john - jul 18</span></h5>
                        <Button variant="outline-info">Follow</Button>{' '}
                    </section>
                </div>
                <div className='list'>
                    <img src='kumari.jpg'></img>
                    <section>
                        <h5> John Smith<span className='tweetspantitle'>@john - jul 18</span></h5>
                        <Button variant="outline-info">Follow</Button>{' '}
                    </section>
                </div>
                <div className='list'>
                    <img src='kumari.jpg'></img>
                    <section>
                        <h5> John Smith<span className='tweetspantitle'>@john - jul 18</span></h5>
                        <Button variant="outline-info">Follow</Button>{' '}
                    </section>
                </div>
            </section>
        )
    }
}

export default RightPanel;