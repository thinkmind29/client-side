import React, { Component } from 'react';
import footer from './footer.css';
import Image from '../mini-components/image';
import logo from '../../icons/LogoFull02.png';

class Footer extends Component {
    render() {
      return (
            <footer>
                    <div className="row">
                        <div className="col-6">
                            <Image classe="footer-logo" photo={logo}/>      
                        </div>
                        <div className="col-6 people">
                            <p>Tássio Marcos - FullStack Developer & Design UX/UI</p>
                            <p>Fabiana Maria - Text Writer & Design UX/UI</p>
                            <p>César Augusto - Front-End Developer & Design UX/UI</p>
                            <p>Jonathan Silva - Design UX/UI</p>
                        </div>
                    </div>
            </footer>
        );
    }
}
export default Footer;  