import React from 'react';

const Input = ({ tipo, cabecalho }) => {

   return <span>
        <input type={ tipo } placeholder={ cabecalho } />
    </span>

}

export default Input;