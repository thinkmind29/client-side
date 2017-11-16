import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Input from './input';
import Button from './button';
import { googleKey, facebookId } from '../tools/keys';

class Formulario extends React.Component {

    render(){

    const { requestFacebook, requestGoogle, createUser, message } = this.props;

    return <div className="row">
    <div className="card">
    <form className="row">
            <p className="col-12">Crie sua conta com suas redes sociais: </p>

            <div className="col-6">
                <GoogleLogin 
                    clientId={ googleKey }
                    buttonText="Google"
                    className="col-12 google"
                    onSuccess={ requestGoogle }
                    onFailure={ requestGoogle } 
                    id="google" />
            </div>

            <div className="col-6">               
                <FacebookLogin 
                    appId={ facebookId }
                    autoLoad={false}
                    textButton="Facebook"
                    fields="name,email,picture"
                    cssClass="col-12"
                    callback={ requestFacebook } /> 
            </div>

            <p className="col-12">Ou crie agora um usuário local</p>      

            <Input tipo="text" cabecalho="Nome:"  />
            <Input tipo="email" cabecalho="Email:" />
            <Input tipo="number" cabecalho="Idade:" />
            <Input tipo="text" cabecalho="Genero Sexual: " />
            <Input tipo="password" cabecalho="Senha: " />
            <Input tipo="password" cabecalho="Confirmar Senha:" />
            <Input tipo="text" cabecalho="Cidade" />
            <Input tipo="text" cabecalho="Estado:" />
            <Input tipo="text" cabecalho="País:" />

            <Button click={ createUser() } name="Entrar" />                            
            <p>{ message }</p>   
        </form>
    </div>
</div>

    }

}


export default Formulario;