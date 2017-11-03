import React, { Component } from 'react';
import * as $ from 'jquery';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { URL_USER } from '../../tools/consts';
import Button from '../mini-components/button.js';
import register from './register.css';

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {message: '', redirect: false};
    }

    createUser = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = ReactDOM.findDOMNode(this.refs.nome).value;
        data.age = ReactDOM.findDOMNode(this.refs.age).value;
        data.gender = ReactDOM.findDOMNode(this.refs.gender).value;
        data.email = ReactDOM.findDOMNode(this.refs.email).value;
        data.password = ReactDOM.findDOMNode(this.refs.senha).value;
        data.city = ReactDOM.findDOMNode(this.refs.city).value;
        data.state = ReactDOM.findDOMNode(this.refs.state).value;
        data.nation = ReactDOM.findDOMNode(this.refs.nation).value;

        const stg = JSON.stringify(data);
        localStorage.setItem('cad', stg);
        this.setState({redirect: true});

    }

    logGoogle = () => {
        return alert('Google');
    }

    logSound = () =>{
        return alert('Sound');
    }
    
    render() {
        if(this.state.redirect)
            return <Redirect to="/register-2"/>
        return (
            <div className="register">
               <div className="card">
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <form className="row">
                        <p className="col-12">Crie sua conta com suas redes sociais: </p>
                        <div className="col-6">
                            {/* <button id="google" className="col-12">Google</button> */}
                            <Button click={this.logGoogle} nome="Google" estilo="google" classe="col-12"/>
                        </div>
                        <div className="col-6">
                        <Button click={this.logSound} nome="SoundCloud" estilo="sound" classe="col-12"/>                           
                        </div>
                        <p className="col-12">Ou crie agora um usuário local</p>
                        <br/>
                        <span>
                            <input type="text" placeholder="Nome:" ref="nome"/>
                        </span>
                        <span>
                            <input type="email" placeholder="Email:" ref="email"/>
                        </span>
                        <span>
                            <input type="number" placeholder="Idade:" ref="age"/>
                        </span>
                        <span>
                            <input type="text" placeholder="Genero Sexual: " ref="gender" />
                        </span>
                        <span>
                            <input type="password" placeholder="Senha: " ref="senha"/>
                        </span>
                        <span>
                            <input type="password" placeholder="Confirmar Senha:" ref="confSenha"/>
                        </span>
                        <span>
                            <input type="text" placeholder="Cidade" ref="city"/>
                        </span>
                        <span>                        
                            <input type="text" placeholder="Estado:" ref="state"/>
                        </span>
                        <span>                        
                            <input type="text" placeholder="País:" ref="nation"/>
                        </span>
                            <Button click={this.createUser} nome="Entrar" />                            
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