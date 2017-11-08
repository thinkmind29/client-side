import React, { Component } from 'react';
import * as $ from 'jquery';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { URL_USER } from '../../tools/consts';
import register from './register.css';

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {message: '', redirect: false};
    }

    createUser = async (event) => {
        event.preventDefault();
        var deserialized = sessionStorage.getItem('cad');
        const data = JSON.parse(deserialized);
        data.instagram = ReactDOM.findDOMNode(this.refs.insta1).value;
        data.youtube = ReactDOM.findDOMNode(this.refs.yout1).value;
        data.twitter = ReactDOM.findDOMNode(this.refs.twitter1).value;
        data.soundCloud = ReactDOM.findDOMNode(this.refs.sound1).value;
        data.hability = ReactDOM.findDOMNode(this.refs.hab1).value;
        data.tags = [ReactDOM.findDOMNode(this.refs.style1).value]
        data.biography = ReactDOM.findDOMNode(this.refs.bio1).value;
        
        console.log(data);
        await $.ajax({
            method: 'POST',
            url: URL_USER,
            data: data,
            dataType: 'json'
        }).then( data =>{
           this.setState({ redirect: true});
           localStorage.removeItem('cad');
        }).catch(e =>{
            this.setState({ message: e.responseJSON.message })
        })


    }
    
    render() {
        if(this.state.redirect)
            return <Redirect to="/login"/>
        return (
            <div className="register">
               <div className="card">
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <form className="row">
                        <p className="col-12">Apenas mais um passo, nós fale sobre você!</p>
                        <br/>

                        <span>
                            <input type="text" placeholder="Twitter:" ref="twitter1"/>
                        </span>
                        <span>
                            <input type="text" placeholder="SoundCloud:" ref="sound1"/>
                        </span>
                        <span>
                            <input type="text" placeholder="Instagram:" ref="insta1" />
                        </span>
                        <span>
                            <input type="text" placeholder="Youtube:" ref="yout1"/>
                        </span>
                        <span>
                            <input type="text" placeholder="Habilidade / Instrumento:" ref="hab1"/>
                        </span>
                        <span>
                            <input type="text" placeholder="Estilo Musical:" ref="style1"/>
                        </span>
                        <span>
                            <textarea type="text" ref="bio1" placeholder="Fale, um pouco sobre você, seus objetivos e projetos!"/>
                        </span>
                            <br />
                            <button onClick={this.createUser}> Entrar </button>
                            <p>{this.state.message}</p>                                               
                    </form>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default RegisterComponent;