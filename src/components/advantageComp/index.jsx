import React, { Component } from 'react';
import Image from './tweet.svg'
import './advantage.css'

export class index extends Component {
    render() {
        return (
            <div className='mainb'>
                <img className='image' src={Image} alt = 'you dont need twitter'/>
                <h3>You don't need to Check Twitter to Know the updates</h3><br/><br/>
            </div>
        )
    }
}

export default index
