import React from 'react';
import ReactDOM from 'react-dom';
import nav from './nav.css';
import { Link } from 'react-router-dom';


export default class NavigateBar extends React.Component{

  constructor(props){
      super(props);
      
  }

  dropdownMenu = () => {


      let x = ReactDOM.findDOMNode(this.refs.dropdownClick);
      if(x.className === "topnav"){
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }

  }

    render(){
            return (

            <nav>
              <ul className="topnav" ref="dropdownClick">
               <li><Link to="/">Musically</Link></li>
               <li className="topnav-right"><Link to="/login">Sign In</Link></li>
               <li className="topnav-right"><Link to="/register">Sign Up</Link></li>
               <li className="dropdownIcon"><a onClick={this.dropdownMenu} href="javascript:void(0)">&#9776;</a></li>
             </ul> 
            </nav>
     )}
}