import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Painel from './painel';
import Chat from './chat';
import Button from './button';
import { chat } from '../actions';

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

class Message extends Component {

    constructor(){
        super();
        this.state = {persons: [], mensagem: '' };
    }

    componentDidMount() {
    
        const data = {
            remetente_id: '5a162546c23d110012930ebb',
            destinatario_id: '5a0fcd2d4362660012e7e6d0',
         }

       this.props.chat('GET', data)
    }

    componentDidUpdate(){
        
        const data = {
            remetente_id: '5a162546c23d110012930ebb',
            destinatario_id: '5a0fcd2d4362660012e7e6d0',
         }



        this.props.chat('GET', data)
    }

    sendMessage = (e) => {
        e.preventDefault();
        const data = {
            remetente_id: '5a0fcd2d4362660012e7e6d0',
            destinatario_id: '5a162546c23d110012930ebb',
            mensagem: ReactDOM.findDOMNode(this.refs.mensagem).value
        }

        // const data = {
        //     remetente_id: '5a162546c23d110012930ebb',
        //     destinatario_id: '5a0fcd2d4362660012e7e6d0',
        //     mensagem: ReactDOM.findDOMNode(this.refs.mensagem).value            
        //  }
        this.props.chat('POST_SEND', data)
    }

    render() {

        if(!this.props.message)
            return <p>Loading...</p>

        return (
            <div className="message">
                <div className='row'>
                    <div className="col-4">
                        {/* <Painel person={this.state.persons} /> */}
                    </div>
                    <div className="col-8">
                        <Chat message={ this.props.message } />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8">
                        <textarea ref="mensagem"></textarea><Button name="Enviar" click={this.sendMessage}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps =  (state) => {
     return { message: state.message.message.data };
}

const mapStateToDispatch = (dispatch) => {
    return bindActionCreators({ chat }, dispatch);
}


export default connect(mapStateToProps, mapStateToDispatch)(Message);