
import React, { Component } from 'react'
import bg from '../assets/bg1.jpg';
import './Profile.css'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className='container profile'>
                    <img src={bg} alt='background' className='img-fluid w-100'/>
                    <h3 className='pname'>{localStorage.getItem('email')}</h3>
                 </div>
                 <div className='container'>
                 <h2>Your Posts!!</h2>
                 <p> all posts appear here</p>
                 </div>
            </div>
        )
    }
}
