import React, { Component } from 'react';
import {Image} from 'antd';
import charlie from '../images/charlie.jpg';
import christian from '../images/christian.jpg';
import janelle from '../images/janelle.jpg';
import jc from '../images/jc.jpg';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className="white">Woops. Well this isn't expected.</h1>
                <p className="white">But you can do something!</p>
                <h3 className="white">Choose someone to kick in Group 5!</h3>
                <Image width={200} src={charlie}/>
                <Image width={200} src={christian}/>
                <Image width={200} src={janelle}/>
                <Image width={200} src={jc}/>
            </div>
        );
    }
}

export default NotFound;