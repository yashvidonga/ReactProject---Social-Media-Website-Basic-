import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

export default function SideBar(){
    return(
        <div className = 'sidebar'>
            <nav className = "nav flex-column">
                <Link className = "nav-link active" to = "/home"><i className = "fa fa-home"></i>Home</Link>
                <Link className = "nav-link" to = "/profile"><i className = "fa fa-user"></i>Profile</Link>
                <div style = {{borderBottom:'2px solid #dbdbdb'}}></div>
                <Link className = "nav-link" to = "/settings"><i className = "fa fa-cog"></i>Setting</Link>
            </nav>
        </div>
    )
}
