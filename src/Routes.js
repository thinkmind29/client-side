import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login';
import User from './components/user';
import Search from './components/search';
import Chat from './components/message';
import Register from './components/register';
import Formulario from './components/formulario';
import Nav from './components/nav';
import Footer from './components/footer';

const Routes = () => {

    return  <Router>
                <div>
                    <Nav />
    
                    <Route exact path='/' component={ Login } />
                    <Route path="/user" component={ User } />
                    <Route path="/search" component={ Search } />
                    <Route path="/message" component={ Chat } />
                    <Route path="/register" component={ Register } />
                    <Route path="/formulario" component={ Formulario } />

                </div>
            </Router>
}

export default Routes;