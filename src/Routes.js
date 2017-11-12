import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login';
import User from './components/user';
import Search from './components/search';

const Routes = () => {

    return  <Router>
                <div>
                    <Route exact path="/" component={ Login } />
                    <Route path="/user" component={ User } />
                    <Route path="/search" component={ Search } />
                </div>
            </Router>
}

export default Routes;