import React, { Component } from 'react';
import footer from './footer.css';

class Footer extends Component {
    render() {
      return (
            <footer>
                    <div className="row">
                        <div className="col-6">
                            <h1>Musically 2017</h1>      
                        </div>
                        <div className="col-6">
                            <p>Tássio Marcos - FullStack Developer</p>
                            <p>Fabiana Maria - Text Writer & Design UX/UI</p>
                            <p>César Augusto - Front-End Developer</p>
                            <p>Jonathan - Desig UX/UI</p>
                        </div>
                    </div>
            </footer>
        );
    }
}
export default Footer;  