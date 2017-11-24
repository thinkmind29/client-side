import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Painel from './painel';
import Chat from './chat';
import Button from './button';
import { chat } from '../actions';


class Message extends Component {

    constructor(props){
        super(props);
        this.state = {persons: [], mensagem: '', id: props.location.state.id };
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