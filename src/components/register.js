import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import Formulario from './formulario';
import SocialRegister from './socialregister';
import { googleKey, facebookId } from '../tools/keys';
import Button from './button';




class Register extends Component {
    
    constructor() {
        super();
        this.state = { render: null }
    }

    createUser = (event) => {
        event.preventDefault();
        
        const data = {
            name: ReactDOM.findDOMNode(this.refs.name).value,
            age: ReactDOM.findDOMNode(this.refs.age).value,
            email: ReactDOM.findDOMNode(this.refs.email).value,
            gender: ReactDOM.findDOMNode(this.refs.gender).value,
            password: ReactDOM.findDOMNode(this.refs.password).value,
            city: ReactDOM.findDOMNode(this.refs.city).value,
            state: ReactDOM.findDOMNode(this.refs.state).value,
            nation: ReactDOM.findDOMNode(this.refs.nation).value
        }

       
                const serialize = JSON.stringify(data);
                localStorage.setItem('store', serialize);
                this.setState({render: 0});

    }

    
    requestGoogle = (response) => {
        console.log(response);
        var token = response.tokenId;
  
        axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`).then(
            user => {

                let obj = {
                    name: user.data.name,
                    email: user.data.email,
                    photo: user.data.picture,
                    provider: 'GOOGLE',
                    provider_id: user.data.sub
                };

            
                const serialize = JSON.stringify(obj);
                localStorage.setItem('store', serialize);
                this.setState({ render: 1 })
            }
        );    
    }
    

    requestFacebook = (response) => {
        try{
        let obj = {
            name: response.name,
            email: response.email,
            provider: 'FACEBOOK',
            photo: response.picture.data.url,
            provider_id: response.id
        }

        const serialize = JSON.stringify(obj);
        localStorage.setItem('store', serialize);
        this.setState({ render: 1 })
    } catch(e) { throw e }

    }
   

    render(){
        const { render } = this.state;

        if(render === 0)
            return <Formulario />
        if(render === 1)
            return <SocialRegister />

        return <div className="register">
        <div className="card">
        <form className="row">
                <p className="col-12">Crie sua conta com suas redes sociais: </p>
    
                <div className="col-6">
                    <GoogleLogin 
                        clientId={ googleKey }
                        buttonText="G+"
                        className="col-12 google"
                        onSuccess={ this.requestGoogle }
                        onFailure={ this.requestGoogle } 
                        id="google" />
                </div>
    
                <div className="col-6">               
                    <FacebookLogin 
                        appId={ facebookId }
                        autoLoad={false}
                        textButton="Facebook"
                        fields="name,email,picture"
                        cssClass="col-12"
                        callback={ this.requestFacebook } /> 
                </div>
    
                <p className="col-12">Ou crie agora um usuário local</p>      
    

                <input type="text" placeholder="Nome:" ref="name" />
                <input type="email" placeholder="Email:" ref="email" />
                <input type="number" placeholder="Idade:" ref="age" />
                <input type="text" placeholder="Genero Sexual: " ref="gender" />
                <input type="password" placeholder="Senha: " ref="password" />
                <input type="password" placeholder="Confirmar Senha:" ref="confPassword" />
                <input type="text" placeholder="Cidade" ref="city" />
                <input type="text" placeholder="Estado:" ref="state" />
                <input type="text" placeholder="País:" ref="nation" />
    
                <Button click={ this.createUser } name="Entrar" />                          
            </form>
        </div>
    </div>
    
    }
}

export default Register