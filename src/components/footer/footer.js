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
                            <p>Centro Universitário Una BH</p>
                        </div>
                    </div>
            </footer>
        );
    }
}
export default Footer;  