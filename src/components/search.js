import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUser } from '../actions';
import Painel from './painel';

class Search extends Component {

    componentDidMount() {

        this.props.searchUser("nation", "BRASIL");
    }

    searchTerms = () => {

       

    }

    render() {
        const { search } = this.props;

        if(!search)
            return <p>Loading...</p>

        const term = search.map( src => {
            return <Painel key={src._id} item={src}/>
        })

        return <ul>{term}</ul>
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return { search: state.user.users };
}

const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({ searchUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(Search);