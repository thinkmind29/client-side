import React, { Component } from 'react';
import Painel from '../../components/painel/painel';
import Chat from '../../components/mini-components/mensagens';
import Button from '../../components/mini-components/button';
import message from './message.css';
import * as $ from 'jquery';
import { URL_USER } from '../../tools/consts';

class Message extends Component {

    constructor(){
        super();
        this.state = {persons: [], text: []};
    }

  
    componentDidMount = async () => {
        
        const message = [
            {id: 1, resp: 'Olá, tudo bem?', data: '7:30'},
            {id: 2, resp: 'Oi, tudo sim e você?', data: '7:31'},
            {id: 1, resp: 'Entrei em seu perfil e vi que você é um bom cantor.', data: '7:30'},
            {id: 1, resp: 'Gostaria de saber e você estaria interessado em conhecer a nossa banda e talvez fazer parte dela', data: '7:45'},
            {id: 2, resp: 'Sim, darei uma olhada no seu perfil e te dou um resposta ok!?', data: '7:50'},
            {id: 1, resp: 'Tudo bem!', data: '8:30'},
            {id: 1, resp: 'Olá já tem a resposta?', data: '12:40'},
            {id: 2, resp: 'Olá, já sim.', data: '13:23'},
            {id: 2, resp: 'Gostaria de conhecer', data: '13:24'},
            
        ]
                 $.ajax({
                    method: 'GET',
                    dataType: 'json',
                    url: URL_USER
                }).then(persons =>{
                    const data = [];
                    for(var user in persons){
                        data.push(persons[user]);
                    }         
                    this.setState({persons: data})
                    this.setState({text: message});                         
                }) 
                
        
            }

    render() {
        return (
            <div className="message">
                <div className='row'>
                    <div className="col-4">
                        <Painel person={this.state.persons} />
                    </div>
                    <div className="col-8">
                        <Chat message={this.state.text} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8">
                        <textarea ref="message"></textarea><Button nome="Enviar"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;