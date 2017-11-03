import React from 'react';
import search from './painel.css';
import Img from '../mini-components/image.js';

export default class SearchComponent extends React.Component{



    constructor(props){
        super(props);
    }

    render(){

        return <ul className="scroll"> 
                    {
                        
                        this.props.person.map(
                            user => {
                                return <li key={user._id}>
                                <div>                
                                    <p> <Img imgage={user.photo} /> {user.name}</p>
                                    <p className="atributos"> {user.age} anos, {user.hability}</p>
                                    <p className="atributos"> {user.city}, {user.state}</p>
                                </div>
                                </li>
                             }
                        )
                    }
                </ul>

    }


}