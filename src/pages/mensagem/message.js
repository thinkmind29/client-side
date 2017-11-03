import React, { Component } from 'react';
import Painel from '../../components/painel/painel';
import message from './message.css';
import * as $ from 'jquery';
import { URL_USER } from '../../tools/consts';

class Message extends Component {

    constructor(){
        super();
        this.state = {persons: []};
    }

    componentDidMount = async () => {
        
                 $.ajax({
                    method: 'GET',
                    dataType: 'json',
                    url: URL_USER
                }).then(persons =>{
                    const data = [];
                    for(var user in persons){
                        data.push(persons[user]);
                    }         
                    this.setState({persons: data})
                         
                }) 
                
        
            }

    render() {
        return (
            <div class="message">
                <div className='row'>
                    <Painel classe="col-4" person={this.state.persons} />
                    <div className="col-8"></div>
                </div>
            </div>
        );
    }
}

export default Message;