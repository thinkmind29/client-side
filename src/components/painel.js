import React from 'react';
import Image from './image';


const Painel = ({ item, onItemPress}) => {

    const { name, photo, age, hability, city, state, _id } = item;
    return <li className="painel" onClick={() => onItemPress(item._id, item.name)}>
                <div className="row" >       
                    <div className="col-2 col-sm-2" >
                        <Image photo={photo} classe="badge" />
                    </div>
                    <div className="col-8 col-sm-8">
                        <p> {name} </p>
                        <p className="atributos"> {age} anos, {hability}</p>
                        <p className="atributos"> {city}, {state}</p>
                    </div>
                </div>
            </li>

}

export default Painel;