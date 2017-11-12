import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from  'react-router-dom';
import { login } from '../actions';
import Button from './button';

class Login extends Component {
    
    constructor(){
        super();
        this.state = {redirect: false};
    }

    requestLogin = () => {

        const data = {};
        data.email = ReactDOM.findDOMNode(this.refs.email).value;
        data.password = ReactDOM.findDOMNode(this.refs.senha).value;
        data.type = "LOCAL";       
        this.props.login(data);
        this.setState({redirect: true});        
        
    }

    requestFacebook = (response) => {
        
        const data = {};
        data.id = response.id;
        data.type = "FACEBOOK";
        this.props.login(data);
        this.setState({redirect: true});
    }

    requestGoogle = (response) => {

        const data = {};
        data.id = response.googleId;
        data.type = 'GOOGLE';
        console.log(data);
        this.setState({redirect: true})        

    }
    

    render() {
        if(this.props.token !== "")
           return <Redirect to={{pathname: '/user', state :{token: this.props.token}}} />

        return <div>
                    <GoogleLogin 
                                clientId="553870782029-nh8b1q10tap16tqbf4e24ecgrdor9r6l.apps.googleusercontent.com"
                                buttonText="Google"
                                className="col-12 google"
                                onSuccess={this.requestGoogle}
                                onFailure={this.requestGoogle} 
                                id="google"
                            />
                     <FacebookLogin 
                                appId="1748511505449819"
                                autoLoad={false}
                                textButton="Facebook"
                                fields="name,email,picture"
                                cssClass="col-12"
                                callback={this.requestFacebook}
                            />  
                     <input type="email" placeholder="Email: " ref='email'/>
                     <input type="password" placeholder="Senha: " ref='senha'/>
                     <Button click={this.requestLogin} name="Login"/>
               </div>
    }

}


const mapStateToProps = (state) => {
    return { login: state, token: state.login.token }
};
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ login }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);