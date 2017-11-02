import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { URL_LOGIN } from '../../tools/consts';
import * as $ from 'jquery';

import css from './login.css';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = { redirect: false, message: '', redirectReg: false};
    }

    
    logar = async (event) => {
        event.preventDefault();
        try{
        const data = {};
        data.email = ReactDOM.findDOMNode(this.refs.email).value;
        data.password = ReactDOM.findDOMNode(this.refs.senha).value;
        
        await $.ajax({
            method: 'POST',
            url: URL_LOGIN,
            data: data,
        }).then( token =>{
            if(token.data === undefined){
                console.log(token)
                this.setState({message: token.message, redirect: false});
         } else{
                const data = JSON.stringify(token);
                localStorage.setItem('user', data);
                this.setState({redirect: true});
            }
            
        })
        } catch(e){
        this.setState({message: "Preencha todos os campos!"})
        }

    }

    goToRegister = () => { this.setState({redirectReg: true}) }

    render() {

        if(this.state.redirect){
            return <Redirect to="/user" />            
        }
        if(this.state.redirectReg){
            return <Redirect to="/register" />
        }
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
                        <button id="google" className="col-12">Google</button>
                    </div>
                    <div className="col-6">
                        <button id="sound" className="col-12">SoundCloud</button>
                    </div>
                        <p className="col-12">Ou crie agora um usuário local</p>
                    <br/>
                    <span>
                        <input type="text" placeholder="Email:" ref="email"/>
                    </span>
                    <span>
                        <input type="email" placeholder="Senha:" ref="senha"/>
                    </span>
                    <br/>
                    <span>
                        <button onClick={this.logar}> Entrar </button>
                    </span>
                        <p>Não tem uma conta? <a onClick={this.goToRegister} href="javascript:void(0)">Cadastre-se</a></p>                                                                 
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

export default Login;