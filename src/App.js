import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './pages/user/user';
import NavigateBar from './pages/nav/nav';
import Message from './pages/mensagem/message'
import Search from './pages/search/search';
import Login from './components/login/login';
import Footer  from './components/footer/footer';
import Register from './components/register/register';
import Register2 from './components/register/register2';
import SocialReg from './components/register/social-register';
import './App.css';

class App extends Component {
  render() {
    return (
    
    <Router>

      <div className="rotas">
          <NavigateBar />
          <Route exact path="/" component={ Register } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/register-2" component={ Register2 } />
          <Route exact path="/social-reg" component={ SocialReg } />
          <Route exact path="/user" component={ User } />
          <Route exact path="/message" component={ Message } />
          <Route exact path="/search" component={ Search } />
          <Footer />
      </div> 

  </Router>
  
  )};
}

export default App;
