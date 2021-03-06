import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as $ from 'jquery';
import Button from '../../components/mini-components/button';
import { URL_USER } from '../../tools/consts';
import PainelComponent from '../../components/painel/painel';
import './search.css';

class SearchPage extends Component {
    
    constructor(){
        super();
        this.state = {persons: [], searcheds: []};
    }


    search = () => {
        const option = ReactDOM.findDOMNode(this.refs.option).value;
        const termo = ReactDOM.findDOMNode(this.refs.word).value.toUpperCase();
        console.log(option, termo);

        $.ajax({
            method: 'GET',
            dataType: 'json',
            url: URL_USER + option + "/" + termo,
        }).then( persons =>{
            const data = [];
            for(var user in persons){
                data.push(persons[user]);
            }
            this.setState({searcheds: data});
        })
    }

    // pageto = (event) =>{

    //     event.target.

    // }

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
    
    handleClick = (object) => {
        console.log(object);
    }
    
    render() {
        return (
            <div className="search">
                <div className="row">
                <p className="title">Conecte-se com outros usuários!
                     <br/> Conheça e amplie os seus horizontes no <j>Musically</j></p>
                    
                </div>
                <div className="row">
                    
                    <div className="col-7">
                        <select ref="option">
                            <option value="nation">País</option>
                            <option value="city">Cidade</option>
                            <option value="state">Estado</option>
                            <option value="style">Ritimo</option>
                            <option value="hability">Habilidade</option>
                        </select>
                        <input type="search" placeholder="Pesquisar" ref="word" />
                        <Button click={this.search} nome="pesquisar" />
                        <PainelComponent person={this.state.searcheds} click={this.handleClick}/>
                    </div>
                    <div className="col-4 closer">
                        <p>Cantores parecidos comigo</p>
                        <PainelComponent person={this.state.persons} click={this.handleClick}/>
                    </div>
                    
                </div>
            </div>

        );
    }
}

export default SearchPage;