import React, { Component } from 'react';
import * as $ from 'jquery';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { URL_USER } from '../../tools/consts';
import register from './register.css';

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {message: '', redirect: false};
    }

    createUser = async (event) => {
        event.preventDefault();
        var deserialized = localStorage.getItem('cad');
        const data = JSON.parse(deserialized);
        data.instagram = ReactDOM.findDOMNode(this.refs.insta).value;
        data.youtube = ReactDOM.findDOMNode(this.refs.yout).value;
        data.twitter = ReactDOM.findDOMNode(this.refs.twitter).value;
        data.soundCloud = ReactDOM.findDOMNode(this.refs.sound).value;
        data.hability = ReactDOM.findDOMNode(this.refs.hab).value;
        data.tags = [ReactDOM.findDOMNode(this.refs.style).value]
        data.biography = ReactDOM.findDOMNode(this.refs.bio).value;
        
        console.log(data);
        await $.ajax({
            method: 'POST',
            url: URL_USER,
            data: data,
            dataType: 'json'
        }).then( data =>{
           this.setState({ redirect: true});
           localStorage.removeItem('cad');
        }).catch(e =>{
            this.setState({ message: e.responseJSON.message })
        })


    }
    
    render() {
        if(this.state.redirect)
            return <Redirect to="/login"/>
        return (
            <div className="register">
               <div className="card">
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <form className="row">
                        <p className="col-12">Apenas mais um passo, nós fale sobre você!</p>
                        <br/>

                        <span>
                            <input type="text" placeholder="Twitter:" ref="twitter"/>
                        </span>
                        <span>
                            <input type="text" placeholder="SoundCloud:" ref="sound"/>
                        </span>
                        <span>
                            <input type="text" placeholder="Instagram:" ref="insta" />
                        </span>
                        <span>
                            <input type="text" placeholder="Youtube:" ref="yout"/>
                        </span>
                        <span>
                            <input type="text" placeholder="Habilidade / Instrumento:" ref="hab"/>
                        </span>
                        <span>
                            <input type="text" placeholder="Estilo Musical:" ref="style"/>
                        </span>
                        <span>
                            <textarea type="text" ref="bio" placeholder="Fale, um pouco sobre você, seus objetivos e projetos!"/>
                        </span>
                            <br />
                            <button onClick={this.createUser}> Entrar </button>
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