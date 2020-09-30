import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Index from './components/pages/Index'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Profile from './components/pages/Profile'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Index} /> 
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/profile' component={Profile}/>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
