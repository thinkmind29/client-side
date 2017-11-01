import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigateBar from './pages/nav/nav';
import Login from './components/login/login';
import Register from './components/register/register';
import './App.css';

class App extends Component {
  render() {
    return (
    
    <Router>

      <div className="rotas">
          <NavigateBar />
          <Route exact path="/" component={ Login } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
      </div> 

  </Router>
  
  )};
}

export default App;
