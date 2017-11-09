import React, { Component } from 'react';
import * as $ from 'jquery';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { URL_USER, URL_LOGIN_SOCIAL} from '../../tools/consts';
import Button from '../mini-components/button.js';
import register from './register.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {message: '', redirect: null};
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

        const serialize = JSON.stringify(data);
        localStorage.setItem('store', serialize);
        this.setState({redirect: true});
    }

    

        regGoogle = (resp) =>{
        var token = resp.tokenId;
        $.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`).then(
            user => {
                console.log(user);
                let obj = {};
                obj.name= user.name;
                obj.email = user.email;
                obj.photo = user.imageUrl;
                obj.provider = 'google';
                obj.provider_id = user.sub;
                console.log(obj);

                const serialize = JSON.stringify(obj);
                sessionStorage.setItem('store', serialize);
                this.setState({redirect: false})
            }
        );

       
    }


    regFacebookCallback = async (response) => {
        
        let obj = {};
        obj.name = response.name;
        obj.email = response.email;
        obj.provider = 'facebook';
        obj.photo = response.picture.data.url;
        obj.provider_id = response.id;

        const serialize = JSON.stringify(obj);
        localStorage.setItem('store', serialize);
        await this.setState({redirect: false});


    }
    

    render() {
        if(this.state.redirect)
            return <Redirect to="/register-2"/>
        if(this.state.redirect === false)
            return <Redirect to="/social-reg" />
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
                        <GoogleLogin clientId="553870782029-nh8b1q10tap16tqbf4e24ecgrdor9r6l.apps.googleusercontent.com"
                                buttonText="Google"
                                className="col-12 google"
                                onSuccess={this.regGoogle}
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
                                callback={this.regFacebookCallback}
                            />                       
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