import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GLOBAL_USER } from '../../tools/consts';

class Li extends Component {

    render() {
        
        if(sessionStorage.getItem(GLOBAL_USER) === null)
            return <div>
                        <li className="topnav-right"><Link to="/login">Sign In</Link></li>
                        <li className="topnav-right"><Link to="/register">Sign Up</Link></li>
                   </div>
        else
            return <div>
                        <li className="topnav-right" onClick={this.props.sair}><Link to='/'>Sair</Link></li>
                        <li className="topnav-right"><Link to="/search">Pesquisar</Link></li>
                        <li className="topnav-right"><Link to="/message">Mensagens</Link></li>
                    </div>


    }
}

export default Li;