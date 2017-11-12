import React from 'react';
import Image from './image';
import './painel.css';

const Painel = ({ item }) => {

    const { name, photo, age, hability, city, state } = item;
    return <li>
                <div className="row">       
                    <div className="col-2">
                        <Image photo={photo} />
                    </div>
                    <div className="col-8">
                        <p> {name}</p>
                        <p className="atributos"> {age} anos, {hability}</p>
                        <p className="atributos"> {city}, {state}</p>
                    </div>
                </div>
            </li>

}

export default Painel;