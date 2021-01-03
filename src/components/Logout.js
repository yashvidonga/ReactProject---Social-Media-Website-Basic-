import React from 'react'
import { Redirect } from 'react-router'

export default function Logout() {
    if(localStorage.getItem('email')){
        localStorage.removeItem('email');
        return <Redirect to='/login'></Redirect>
    }
    return (
        <div>
        </div>
    )
}
