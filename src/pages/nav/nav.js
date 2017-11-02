import React from 'react';
import ReactDOM from 'react-dom';
import nav from './nav.css';
import { Link, Redirect } from 'react-router-dom';
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
      // if(this.state.redirect)
      //   return <Redirect to="/" />
    
      if(localStorage.getItem(GLOBAL_USER) !== null){
      return( 
        <nav>       
        <ul className="topnav" ref="dropdownClick">
          <li><Link to="/">Musically</Link></li>
          <li className="topnav-right"><Link to="/search">Pesquisar</Link></li>
          <li className="topnav-right"><Link to="/message">Mensagens</Link></li>
          <li className="topnav-right" onClick={this.sair}><Link to='/'>Sair</Link></li>
          <li className="dropdownIcon"><a onClick={this.dropdownMenu} href="javascript:void(0)">&#9776;</a></li>
        </ul>
        </nav> 
    ) } else{ 
      return (
        <nav>
          <ul className="topnav" ref="dropdownClick">
            <li><Link to="/">Musically</Link></li>
            <li className="topnav-right"><Link to="/login">Sign In</Link></li>
            <li className="topnav-right"><Link to="/register">Sign Up</Link></li>
            <li className="dropdownIcon"><a onClick={this.dropdownMenu} href="javascript:void(0)">&#9776;</a></li>
          </ul>
        </nav> 
       )
      
    }
  }
}
