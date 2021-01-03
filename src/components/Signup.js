import React, { Component } from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
import users from '../users/users.json';
//shortcut to create class components type rcc 
export default class Signup extends Component {
    state = {
        email : '',
        password:'',
        cpassword:'', 
        error:''
    }
    handleChange = (event) =>{
        var name = event.target.name;
        var val = event.target.value;
        this.setState({[name]:val})
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        var {password, cpassword} =  this.state;
        if(password != cpassword)
        {
            this.setState({error:'Password doesn\'t Match'})
        }
        else{
            users.push({'email':this.state.email,'password':password});
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h2>Create Account</h2>
                    </div>

                    <span style = {{color:'red'}}>{this.state.error}</span>

                    <form onSubmit={this.handleSubmit}>
                        
                        <input type="text" id="login" className="fadeIn second" name="email" 
                        value={this.state.email} placeholder="Email" onChange={this.handleChange}/>
                        
                        <input type="password" id="password" className="fadeIn third" name="password"
                        value={this.state.password} placeholder="Password" onChange={this.handleChange}/>
                        
                        <input type="password" id="cpassword" className="fadeIn third" name="cpassword"
                        value={this.state.cpassword} placeholder="Confirm Password" onChange={this.handleChange}/>

                        <input type="submit" className="fadeIn fourth" value="Create"/>
                    </form>

                    <div className='create'>
                        <Link className="underlineHover" to='/Login'>Login</Link>
                    </div>

                    
                </div>
            </div>
        )
    }
}
