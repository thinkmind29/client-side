import React, { Component } from 'react';
import chat from './chat.css';

class Chat extends Component {
    
    
    render() {

        return <div> {this.props.message.map( text =>{
                if(text.id === 1)
                   return <div className="remetente">
                                <p>{text.resp}</p>
                                <p>{text.data}</p>
                          </div>
               else
                    return <div className="destinatario">
                                <p>{text.resp}</p>
                                <p>{text.data}</p>
                            </div>
            })} </div>
        }
}

export default Chat;