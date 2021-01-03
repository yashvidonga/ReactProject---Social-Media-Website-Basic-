import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import users from '../users/users.json';
//shortcut to create class components type rcc 
export default class Login extends Component {
    state = {
        email : '',
        password:''
    }
    handleChange = (event) =>{
        var name = event.target.name;
        var val = event.target.value;
        this.setState({[name]:val})
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        //alert("Login Done")
        console.log(users);
        var isLoginFailed = true;
        for(var user of users)
        {
            if(user.email === this.state.email && user.password === this.state.password)
            {
                isLoginFailed = false;
                alert(user.email+"logged in");
                localStorage.setItem("email",user.email);
                this.props.history.push('/home')
                break;
            }
            if(isLoginFailed)
            {
                alert("wrong creds");
            }
        }
    }
    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h2>Sign In</h2>
                    </div>
          
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="login" className="fadeIn second" name="email" 
                        value={this.state.email} placeholder="Email" onChange={this.handleChange}/>
                        
                        <input type="password" id="password" className="fadeIn third" name="password"
                        value={this.state.password} placeholder="Password" onChange={this.handleChange}/>
                        
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>

                    <div className='create'>
                        <Link className="underlineHover" to='signup'>Create Account</Link>
                    </div>

                    <div id="formFooter">
                        <Link className="underlineHover" to="/forgot">Forgot Password?</Link>
                    </div>
                </div>
            </div>
        )
    }
}
