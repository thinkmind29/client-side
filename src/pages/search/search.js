import React, { Component } from 'react';
import * as $ from 'jquery';
import { URL_USER } from '../../tools/consts';
import SearchComponent from '../../components/search/search';
import search from './search.css';

class SearchPage extends Component {
    
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
            <div className="search">
                <div className="row">
                    <input type="search" placeholder="Pesquisar" />
                    <input type="search" placeholder="Pesquisar" />
                    <input type="search" placeholder="Pesquisar" />
                </div>
                <div className="row">
                    <SearchComponent person={this.state.persons} />
                    <SearchComponent person={this.state.persons} />
                </div>
            </div>

        );
    }
}

export default SearchPage;