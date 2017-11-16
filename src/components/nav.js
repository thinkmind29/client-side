import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

    dropDownMenu = (event) => {
        event.preventDefault

    }

    render() {
        return( 
            <nav>       
            <ul className="topnav" ref="dropdownClick">
              <li><Link to="/">Musically</Link></li>
              <li className="dropdownIcon"><a onClick={this.dropdownMenu} href="javascript:void(0)">&#9776;</a></li>
              {/* <Li /> */}
            </ul>
            </nav> 
          ) 
    }

}


export default NavBar;