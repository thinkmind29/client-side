import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { connect } from 'react-redux';
import { register } from '../actions';
import Formulario from './formulario';

class Register extends Component {
    
    constructor() {
        super();
        this.state = { render: 0 }
    }

    createUser = (data) => {

        const serialize = JSON.stringify(data);
        localStorage.setItem('store', serialize);

    }

    createUser2 = (data) => {

        const obj = localStorage.getItem('store');
        const deserialize = JSON.parse(obj);

        this.props.register('LOCAL', deserialize);
        
    }
    requestGoogle = (response) => {
        var token = response.tokenId;
  
        axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`).then(
            user => {
                console.log(user);
                let obj = {
                    name: user.name,
                    email: user.email,
                    photo: user.picture,
                    provider: 'google',
                    provider_id: user.sub
                };
                const serialize = JSON.stringify(obj);
                localStorage.setItem('store', serialize);
            }
        );    
    }

    requestGoogle2 = (response) => {

        try{
        const obj = localStorage.getItem('store');
        const deserialize = JSON.parse(obj);

        this.props.register('GOOGLE', deserialize);
        this.setState( {render: 1} )
        }
        catch(e) { throw e }
    }
    

    requestFacebook = (response) => {
        try{
        let obj = {
            name: response.name,
            email: response.email,
            provider: 'facebook',
            photo: response.picture.data.url,
            provider_id: response.id
        }

        const serialize = JSON.stringify(obj);
        localStorage.setItem('store', serialize);
        this.setState({ render: 1 })
    } catch(e) { throw e }

    }

    requestFacebook2 = () => {


        const obj = localStorage.getItem('store');
        const deserialize = JSON.parse(obj);

        this.props.register('FACEBOOK', deserialize)

    }
   

    render(){
        const { render } = this.state;

        if(render === 0)
            return <Formulario message="" createUser={this.createUser} requestFacebook={this.requestFacebook} requestGoogle={this.requestGoogle} />
        if(render === 1)
            return <Formulario message="Urul" />
    }
}

const mapStateToProps = (state) =>{
    return state
}

const mapStateToDispatch = (dispatch) =>{
    return bindActionCreators({}, dispatch);
}


export default connect(mapStateToProps, mapStateToDispatch)(Register);