import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

export default class MenuBar extends React.Component {
    render() {
        return (
            <header>
                <div className = 'left bar'>
                    <h2>BuzzTalk</h2>
                </div>

                <div className = 'right'>
                    <div>{this.props.email}</div>
                    <div><Link className = 'link' to = '/logout'>Logout</Link></div>
                </div>

                <div className = 'clear'></div>
            </header>
            
        )
    }
}
