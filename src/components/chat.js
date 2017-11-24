import React from 'react';

let a = 0;
const Chat = ({ message }) => {

    const order = message.sort((a,b) => {
        return a.data > b.data ? 1 : b.data > a.data ? -1 : 0
    })

    if(!message)
        return <h1>Não há mensagens a serem exibidas </h1>

    return <div> { order.map(text =>{
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


