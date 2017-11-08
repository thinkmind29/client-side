import React, { Component } from 'react';

class componentName extends Component {


    render() {
        return <button id={this.props.estilo} onClick={this.props.click} 
        className={this.props.classe}>{this.props.nome}</button>
    }
}

export default componentName;