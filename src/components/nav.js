import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';


class NavBar extends React.Component {
    
    dropDownMenu = () => {
        let x = ReactDOM.findDOMNode(this.refs.dropdownClick);
        if(x.className === "topnav"){
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }


    render() {
        return( 
            <nav>       
            <ul className="topnav" ref="dropdownClick">
              <li><Link to="/">Musically</Link></li>
              <li className="dropdownIcon"><a onClick={ this.dropDownMenu} href="javascript:void(0)">&#9776;</a></li>
              <li className="topnav-right"><Link to="/search">Pesquisa</Link></li>
              <li className="topnav-right"><Link to="/search">Mensagens</Link></li>
            </ul>
            </nav> 
          )

    }

}


export default NavBar;