import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from "react-router-dom";
import * as $ from 'jquery';
import { URL_LOGIN_SOCIAL } from '../../tools/consts';


class SocailRegister extends Component {

    constructor(){
        super();
        this.state ={
            message: '',
            redirect: false
        }
    }


    register = (event) =>{
        event.preventDefault();

        var info = sessionStorage.getItem('reg');
        var deserialize = JSON.parse(info);

        var data = {};
        data.city = ReactDOM.findDOMNode(this.refs.city).value;
        data.state = ReactDOM.findDOMNode(this.refs.state).value;
        data.nation = ReactDOM.findDOMNode(this.refs.nation).value;
        data.instagram = ReactDOM.findDOMNode(this.refs.insta).value;
        data.youtube = ReactDOM.findDOMNode(this.refs.yout).value;
        data.twitter = ReactDOM.findDOMNode(this.refs.twitter).value;
        data.soundCloud = ReactDOM.findDOMNode(this.refs.sound).value;
        data.hability = ReactDOM.findDOMNode(this.refs.hab).value;
        data.tags = [ReactDOM.findDOMNode(this.refs.style).value]
        data.biography = ReactDOM.findDOMNode(this.refs.bio).value;
        console.log(data);
        $.post(URL_LOGIN_SOCIAL, data).then(resp => {
            const token = JSON.stringify(resp);
            localStorage.setItem('user', token);
            this.setState({redirect: true});
        });
    } 


    render() {
        if(this.state.redirect)
            <Redirect to="/user" />
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
                            <input type="text" placeholder="Cidade" ref="city"/>
                        </span>
                        <span>                        
                            <input type="text" placeholder="Estado:" ref="state"/>
                        </span>
                        <span>                        
                            <input type="text" placeholder="País:" ref="nation"/>
                        </span>
                        <span>
                            <textarea type="text" ref="bio" placeholder="Fale, um pouco sobre você, seus objetivos e projetos!"/>
                        </span>
                            <br />
                            <button onClick={this.register}> Register </button>
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

export default SocailRegister;