import React from 'react';
import Image from  './image';
import logo from '../img/LogoFull02.png';

const Footer = () => {
    return (
        <footer>
                <div className="row">
                    <div className="col-6">
                        <Image classe="footer-logo" photo={logo}/>      
                    </div>
                    <div className="col-6 people">
                        <p>Centro Universitário Una BH</p>
                    </div>
                </div>
        </footer>
    );
}


export default Footer;