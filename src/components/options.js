import React from 'react';

class Options extends React.Component {

    render(){
        return <select ref="option">
        <option value="nation">País</option>
        <option value="city">Cidade</option>
        <option value="state">Estado</option>
        <option value="style">Ritimo</option>
        <option value="hability">Habilidade</option>
    </select>
    }
             
}

export default Options;