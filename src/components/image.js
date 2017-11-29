import React from 'react';
import foto from '../img/man.png';


const Image = ({ photo, classe }) => {

     if(photo === null || photo === undefined)
        return <img src={foto} className={ classe }/>
    else
     return <img src={photo} className={ classe } />

}

export default Image;