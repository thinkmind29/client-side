import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../mini-components/button';
import { Redirect } from 'react-router-dom';
import { URL_LOGIN, URL_LOGIN_SOCIAL, GLOBAL_USER } from '../../tools/consts';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import * as $ from 'jquery';

import css from './login.css';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = { redirect: false, message: '', redirectReg: false,};
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
                this.setState({redirect: true, message: token.data});
            }
            
        })
        } catch(e){
        this.setState({message: "Preencha todos os campos!"})
        }

    }


    logGoogle = (resp) =>{
        const serialize = JSON.stringify(resp.profileObj);
        sessionStorage.setItem('store', serialize);
        $.get(URL_LOGIN_SOCIAL + "/" + resp.googleId).then(resp => {  
            
            if(resp.data === undefined)
                this.setState({message: resp.message, redirect: false})
            else{
                const data = JSON.stringify(resp);
                localStorage.setItem('user', data);
                this.setState({redirect: true});
            }
        });
        

    }

    faceLogin = (response) => {

        $.get(URL_LOGIN_SOCIAL + '/' + response.id).then( resp => {
            console.log(resp);
            if(resp.data === undefined)
                this.setState({message: resp.message})
            else{
                const data = JSON.stringify(resp);
                localStorage.setItem('user', data);
                this.setState({redirect: true});
            }
            
        })
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
                    <p className="col-12">Faça login com suas redes sociais: </p>
                    <div className="col-6">
                    <GoogleLogin clientId="553870782029-nh8b1q10tap16tqbf4e24ecgrdor9r6l.apps.googleusercontent.com"
                                buttonText="Google"
                                className="col-12 google"
                                onSuccess={this.logGoogle}
                                onFailure={this.logSound} 
                                id="google"/ >
                    </div>
                    <div className="col-6">
                    <FacebookLogin 
                                appId="1748511505449819"
                                autoLoad={false}
                                textButton="Facebook"
                                fields="name,email,picture"
                                cssClass="col-12"
                                callback={this.faceLogin}
                            />                       
                    </div>
                        <p className="col-12">Ou entre agora com um usuário local</p>
                    <br/>
                    <span>
                        <input type="email" placeholder="Email:" ref="email"/>
                    </span>
                    <span>
                        <input type="password" placeholder="Senha:" ref="senha"/>
                    </span>
                    <br/>
                    <span>
                        <Button click={this.logar} nome="Entrar"/>
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