import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Home from './Home'
import MenuBar from './MenuBar'
import Profile from './Profile'
import SideBar from './SideBar'
import Settings from './Settings'
//shortcut to create class components type rfc 
export default function SocialBuilder() {
    if(localStorage.getItem('email'))
    return (
        <div>
            <MenuBar email = {localStorage.getItem('email')}/>
            <div className = 'row'>
                <div className = 'col-md-2'>
                    <SideBar/>
                </div>
                <div className = 'col-md-10'>
                    <Switch>
                        <Route path = '/home' component = {Home}/>
                        <Route path = '/profile' component = {Profile}/>
                        <Route path = '/settings' component = {Settings}/>
                    </Switch>
                </div>
            </div>            
            
        </div>
    )
    else return <Redirect to = '/login'/>
}

