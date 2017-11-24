import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUser } from '../actions';
import Painel from './painel';
import Button from './button';
import Opcoes from './options';
import User from './userClick';

class Search extends Component {


    constructor(){
        super();
        this.state = { busca: '', click: false, id: '' }
    }

    componentDidMount() {

        this.props.searchUser('GET');
        
    }

    searchTerms = () => {

        const param = ReactDOM.findDOMNode(this.refs.option).value;
        const param2 = (ReactDOM.findDOMNode(this.refs.word).value).toUpperCase();
        this.props.searchUser('SEARCH', param, param2);
        
    }

    onItemPress = (id) => {
        this.setState({
            click: true,
            id
        });
    }

    render() {
        const { search, tags } = this.props;

        const term = search.map( src => {
            return <Painel key={src._id} item={src} 
            onItemPress={this.onItemPress}/>
        })

        const tag = tags.map( src => {
            return <Painel key={src._id} item={src} onItemPress={this.onItemPress} />
        })

        if(this.state.click === true)
            return <User id={this.state.id}/>

        return <div className="search">
        <div className="row">
        <p className="title">Conecte-se com outros usuários!
             <br/> Conheça e amplie os seus horizontes no <j>Musically</j></p>
            
        </div>
        <div className="row">       
            <div className="col-7">
                <Opcoes ref="option" />
                <input type="search" placeholder="Pesquisar" ref="word" />
                <Button click={this.searchTerms} name="pesquisar" />
                { term }
            </div>
            <div className="col-4 closer">
                <p>Cantores parecidos comigo</p>
                    { tag }
                </div>  
        </div>
    </div>
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return { search: state.user.users, tags: state.user.tag_user };
}

const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({ searchUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(Search);