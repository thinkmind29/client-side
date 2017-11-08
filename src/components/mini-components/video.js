import React, { Component } from 'react';

class Video extends Component {
    
    render(){
        if(this.props.link === null || this.props.link === undefined || this.props.link === "")
            return <p></p>
        else
         return   <video>
                <source src={this.props.link}/>
            </video>
    }

}

export default Video;