import React, { Component } from 'react';
import Doctors from './doctors.svg';
import './headertext.css';


export class index extends Component {
    render() {
        return (
            <div className='main'>
                <h1 className='text'>Track Corona Virus (COVID-19) in Nigeria</h1>
                <img  className ='pic' src={Doctors} alt='doctors'/>
            </div>
        )
    }
}

export default index
