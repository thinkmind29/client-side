import React from 'react';

const Button = ({ click, name}) => {
    return <button onClick={  click }> { name } </button>
}

export default Button;