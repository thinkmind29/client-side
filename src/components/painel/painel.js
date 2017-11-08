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
                                console.log(user);
                                return <li key={user._id} onClick={this.props.click}>
                                <div className="row">       
                                    <div className="col-2">
                                        <Img photo={user.photo} />
                                    </div>
                                    <div className="col-8">
                                        <p> {user.name}</p>
                                        <p className="atributos"> {user.age} anos, {user.hability}</p>
                                        <p className="atributos"> {user.city}, {user.state}</p>
                                    </div>
                                </div>
                                </li>
                             }
                        )
                    }
                </ul>

    }


}