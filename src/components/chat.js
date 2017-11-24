import React from 'react';

let a = 0;
const Chat = ({ message }) => {

    if(!message)
        return <h1>Não há mensagens a serem exibidas </h1>

    return <div> {message.map(text =>{
                        if(text.destinatario_id === sessionStorage.getItem('chat'))
                           return <div key={a += 1} className="remetente">
                                        <p>{text.mensagem}</p>
                                        <p>{text.data}</p>
                                  </div>
                       else
                            return <div key={a += 1} className="destinatario">
                                        <p>{text.mensagem}</p>
                                        <p>{text.data}</p>
                                    </div>
                    })} </div>


}

export default Chat;


