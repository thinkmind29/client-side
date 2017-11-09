import React from 'react';
import ReactDOM from 'react-dom';
import nav from './nav.css';
import { Link, Redirect } from 'react-router-dom';
import Li from '../../components/mini-components/li';
import { GLOBAL_USER } from '../../tools/consts';

export default class NavigateBar extends React.Component{

  constructor(){
    super();
    this.state = {redirect: false}
  }

  dropdownMenu = () => {

      let x = ReactDOM.findDOMNode(this.refs.dropdownClick);
      if(x.className === "topnav"){
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }

  }

  sair = () =>{
    localStorage.removeItem(GLOBAL_USER);
    this.setState({redirect: true});
  }


    render(){
    
      return( 
        <nav>       
        <ul className="topnav" ref="dropdownClick">
          <li><Link to="/">Musically</Link></li>
          <li className="dropdownIcon"><a onClick={this.dropdownMenu} href="javascript:void(0)">&#9776;</a></li>
          <Li sair={this.sair} />
        </ul>
        </nav> 
      ) 
    
  }
}
