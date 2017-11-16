import React from 'react';

let a = 0;
const Chat = ({ message }) => {

    return <div> {message.map( text =>{
                if(text.id === 1)
                   return <div key={a += 1} className="remetente">
                                <p>{text.resp}</p>
                                <p>{text.data}</p>
                          </div>
               else
                    return <div key={a += 1} className="destinatario">
                                <p>{text.resp}</p>
                                <p>{text.data}</p>
                            </div>
            })} </div>


}

export default Chat;