import React from 'react';
import search from './search.css';


export default class SearchComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return <ul className="scroll col-6"> 
                    {
                        this.props.person.map(
                            user => {
                                return <li key={user._id}>
                                <div>
                                    <img src={user.photo} />
                                    <p>{user.name}, {user.age} anos</p>
                                    <p>{user.city}, {user.state}</p>
                                </div>
                                </li>
                             }
                        )
                    }
                </ul>

    }


}