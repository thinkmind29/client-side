import React from 'react';
import Image from './image';



const Social = ({ link, classe, img, classename}) => {

    return <a href={ link }> <Image photo={ img } classe={ classe }/> </a>

}

export default Social;