import React, { Component } from 'react';

import GoogleButton from '../widgets/googleButton'
import googleBtnDesign from '../styles/googleBtnDesign.css'

class Owner extends Component {
    render() {
        return (
            <div>
                <GoogleButton styles = {googleBtnDesign} />
            </div>
        );
    }
}

export default Owner;
