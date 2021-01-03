import logo from './logo.svg';
import './App.css';
import SocialBuilder from './components/SocialBuilder';
import { Route, Switch } from 'react-router';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/login" component = {Login}></Route>
        <Route path = '/signup' component = {Signup}></Route>
        <Route path = '/logout' component = {Logout}></Route>
        <Route path = '/' component = {SocialBuilder}></Route>
        
      </Switch>
    
    </div>
  );
}

export default App;
