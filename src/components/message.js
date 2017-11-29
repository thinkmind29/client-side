import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Painel from './painel';
import Chat from './chat';
import Button from './button';
import { chat } from '../actions';
import Spinner from 'react-spinkit';



class Message extends Component {

    constructor(props){
        super(props);
        console.log(props.location.state)
        this.state = {persons: [], mensagem: '', id: props.location.state.id, nome: props.location.state.nome };
    }

    componentDidMount() {
    
        const data = {
            remetente_id: localStorage.getItem('chat'),
            destinatario_id: this.state.id,
         }

       this.props.chat('GET', data)
    }

    componentDidUpdate(){
        
        const data = {
            remetente_id: localStorage.getItem('chat'),
            destinatario_id: this.state.id,
         }



        this.props.chat('GET', data)
    }

    sendMessage = (e) => {
        e.preventDefault();
        
  

        const data = {
            remetente_id: localStorage.getItem('chat'),
            destinatario_id: this.state.id,
            mensagem: ReactDOM.findDOMNode(this.refs.mensagem).value,

            }
        // alert(date);
        this.props.chat('POST_SEND', data)
        ReactDOM.findDOMNode(this.refs.mensagem).value = '';
        
    }

    render() {

        if(!this.props.message)
            return <p>Loading...</p>

        return (
            <div className="message">
                <div className='row'>
                    <h1 className="nome-message">{ this.state.nome }</h1>
                    <div className="col-12 container-msg">
                        <Chat message={ this.props.message } />
                    </div>
                        <textarea ref="mensagem"></textarea><Button name="Enviar" click={this.sendMessage}/>
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
