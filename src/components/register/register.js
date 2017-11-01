import React, { Component } from 'react';
import * as $ from 'jquery';
import ReactDOM from 'react-dom';
import { URL_USER } from '../../tools/consts';

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    createUser = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = ReactDOM.findDOMNode(this.refs.nome).value;
        data.age = ReactDOM.findDOMNode(this.refs.nome).value;
        data.hability = ReactDOM.findDOMNode(this.refs.nome).value;
        data.tags = ['anos80', 'rock', 'pop'];
        data.city = ReactDOM.findDOMNode(this.refs.nome).value;
        data.state = ReactDOM.findDOMNode(this.refs.nome).value;
        data.nation = ReactDOM.findDOMNode(this.refs.nome).value;

        $.ajax({
            method: 'POST',
            ulr: URL_USER,
            data: data,
            dataType: 'json'
        }).then( data =>{
            this.setState({message: data.message});
        })


    }
    
    render() {
        return (
            <div className="center">
               <div className="card">
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <form>
                        <p>Crie sua conta com suas redes sociais: </p>
                        <button id="google">Google</button>
                        <button id="sound">SoundCloud</button>
                        <br/>
                        <br/>
                        <p>Ou crie agora um usuário local</p>
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
                            <input type="password" placeholder="Senha: " ref="senha"/>
                        </span>
                        <span>
                            <input type="password" placeholder="Confirmar Senha:" ref="confSenha"/>
                        </span>
                        <span>
                            <input type="text" placeholder="Cidade" ref="city"/>
                        </span>
                        <span>                        
                            <input type="text" placeholder="Estado:" ref="statee"/>
                        </span>
                        <span>                        
                            <input type="text" placeholder="País:" ref="nation"/>
                        </span>
                            <br/>
                        <span>                        
                            <button onClick={this.createUser}> Entrar </button>
                        </span>                        
                    </form>
                </div>
                <br/>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default RegisterComponent;