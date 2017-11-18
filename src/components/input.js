import React from 'react';

const Input = ({ tipo, cabecalho, click }) => {

   return <span>
        <input type={ tipo } placeholder={ cabecalho } />
    </span>

}

export default Input;