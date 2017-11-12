import React from 'react';
import foto from '../img/man.png';


const Image = ({ photo }) => {

     if(photo === null || photo === undefined)
        return <img src={foto}/>
    else
     return <img src={photo}/>

}

export default Image;