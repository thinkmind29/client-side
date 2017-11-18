import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from  'react-router-dom';

import { login } from '../actions';
import { googleKey, facebookId } from '../tools/keys';
import Button from './button';

class Login extends Component {
    
    constructor(){
        super();
        this.state = {redirect: false};
    }

    requestLogin = (event) => {
        
        event.preventDefault();
        const data = {};
        data.email = ReactDOM.findDOMNode(this.refs.email).value;
        data.password = ReactDOM.findDOMNode(this.refs.senha).value;
        data.type = "LOCAL";       
        this.props.login(data);       
        
    }

    requestFacebook = (response) => {
        const data = {
            id: response.id,
            type: 'FACEBOOK'
        };
        this.props.login(data);
    }

    requestGoogle = (response) => {
        const data = {
            id: response.googleId,
            type: 'GOOGLE'
        };
        this.props.login(data);
    }

    register = () => {
        this.setState({ redirect: true })
    }
    

    render() {

        if(this.props.token !== "" && this.props.token !== undefined)
           return <Redirect to={{pathname: '/user', state :{token: this.props.token}}} />

        return <div className="register">
                    <div className="card">
                        <form className="row">
                            <p className="col-12">Faça login com suas redes sociais: </p>
                            <div className="col-6">
                                <GoogleLogin 
                                            clientId={ googleKey }
                                            buttonText="Google"
                                            className="col-12 google"
                                            onSuccess={this.requestGoogle}
                                            onFailure={this.requestGoogle} 
                                            id="google"
                                        />
                            </div>
                            <div className="col-6">
                                <FacebookLogin 
                                            appId={ facebookId }
                                            autoLoad={false}
                                            textButton="Facebook"
                                            fields="name,email,picture"
                                            cssClass="col-12"
                                            callback={this.requestFacebook}
                                        />  
                            </div>
                            <p className="col-12">Ou entre agora com um usuário local</p>
                            <span>
                                <input type="email" placeholder="Email: " ref='email'/>
                            </span>
                            <span>
                                <input type="password" placeholder="Senha: " ref='senha'/>
                            </span>
                            <span>
                                <Button click={this.requestLogin} name="Login"/>
                                {/* <p>{this.props.login.message}</p> */}
                            </span>
                        <p>Não tem uma conta? <a onClick={this.register} href="javascript:void(0)">Cadastre-se</a></p>
                        <p>{this.props.message}</p>
                        
                        </form>
                    </div>
               </div>
    }

}


const mapStateToProps = (state) => {
    return { login: state, token: state.login.token, message: state.login.message }
};
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ login }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);