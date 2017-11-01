import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { URL_LOGIN } from '../../tools/consts';
import * as $ from 'jquery';

import css from './login.css';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = { redirect: false, message: ''};
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

    goToRegister = async () => { this.setState({redirect: 'register'}) }

    render() {

        if(this.state.redirect)
            return <Redirect to="/user" />
        if(this.state.redirect === 'register')
            return <Redirect to="/register" />
        return (
        
            <div className="center">
               <div className="card">
                   <form>
                       <p>Faça login com as redes sociais: </p>
                        <button id="google">Google</button>
                        <button id="sound">SoundCloud</button>
                        <br/>
                        <br/>
                        <p>Ou utilize o seu usuário local</p>
                        <br/>
                        <span>
                            <input type="email" placeholder="Email:" ref="email"/>
                        </span>
                        <span>                        
                        <input type="password" placeholder="Senha:" ref="senha"/>
                            </span>
                        <span>                        
                            <button onClick={this.logar}> Entrar </button>
                        </span>                        
                    </form>
                    <p>Não tem uma conta? <a onClick={this.goToRegister} href="javascript:void(0)">Cadastre-se</a></p>
                </div>
                <br/>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Login;