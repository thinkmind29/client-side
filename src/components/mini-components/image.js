import React, { Component } from 'react';
import photo from '../../icons/iconGoogle.jpg';

class ImageContent extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        if(this.props.photo === null || this.props.photo === undefined)
            return <img src={photo} className={this.props.classe}/>
        else
            return <img src={this.props.photo} className={this.props.classe} />
    }
}

export default ImageContent;