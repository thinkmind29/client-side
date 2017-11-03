import React, { Component } from 'react';
import Image from './image';
class Social extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return <a href={this.props.link} className={this.props.cl}> <Image photo={this.props.img} classe={this.props.classe}/> </a>
    }
}

export default Social;