import React from 'react';

let a = 0;
const Chat = ({ message }) => {

    console.log(message);
    if(!message)
        return <h1>Não há mensagens a serem exibidas </h1>

    return <div> {message.map(text =>{
                        if(text.remetente_id === localStorage.getItem('chat'))
                           return <div key={a += 1} className="remetente">
                                        <p>{text.mensagem}</p>
                                        {/* <p>{text.data.getFullYear()}</p> */}
                                  </div>
                       else
                            return <div key={a += 1} className="destinatario">
                                        <p>{text.mensagem}</p>
                                    </div>
                    })} </div>


}

export default Chat;


