import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import users from '../users/users.json';

export default class Settings extends Component {
    state={
        newpassword:'',
        cpassword:'',
        confirm:false,
        error:''
    }
    handleChange=(event)=>{
        var name  = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value})
    }
    handleSubmit =(e)=>{
            e.preventDefault();
            if(this.state.cpassword == this.state.newpassword)
            {
                    var user = users.filter(user=>user.email==localStorage.getItem('email'))
                    console.log(user)
                    user.password = this.state.newpassword;
                    console.log(user)
                    this.setState({confirm:true})

            }
            else{
                this.setState({error:'Password do not match'})
            }
    }
    render() {
      console.log('********* Settings *************')
      console.log(users)
        if(this.state.confirm)
        return (
            <div className="wrapper fadeInDown"> 
            <div className="fadeIn first">
             <div id="formContent">
                <h2 className='sign'>Password changed successfully</h2>
              </div> 
              </div>
            </div>
            )      
        else
        return (
        
            <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <h2 className='sign'>Change Password</h2>
              </div>
              <div style={{color:'red'}}>{this.state.error}</div>
              <form onSubmit={this.handleSubmit}>
                <input type="password" id="login" className="fadeIn second" name="newpassword" 
                value={this.state.newpassword} placeholder="New Password" onChange={this.handleChange}/>
                <input type="password" id="password" className="fadeIn third" name="cpassword"
                value={this.state.cpassword} placeholder="Confirm Password" onChange={this.handleChange}/>
                <input type="submit" className="fadeIn fourth" value="Change Password"/>
              </form>
               
            </div>
          </div>
      
        )
    }
}
