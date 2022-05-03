import '../../App.css';
import React, { Component } from 'react';
import { Button } from 'bootstrap';

class ProfileInfo extends Component{
    render()
    {
        return(
                        <section className='info'>
                            <h3> John Smith</h3>
                            <p>@john</p>
                            <a href='www.arunlama.com'>twitter.com/john</a>
                            <p>Perth , WA</p>
                            <p>Joined on November 2020</p>
                            <a type='Button' className='btn btn-info'>Tweet to John Smith</a>
                        </section>
        )
    }
}

export default ProfileInfo;