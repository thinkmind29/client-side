import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { register } from '../actions';



class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = { redirect: false};
    }

    createUser = (event) => {
        event.preventDefault();
        var deserialized = localStorage.getItem('store');
        const data = JSON.parse(deserialized);

        data.instagram = ReactDOM.findDOMNode(this.refs.insta1).value;
        data.youtube = ReactDOM.findDOMNode(this.refs.yout1).value;
        data.twitter = ReactDOM.findDOMNode(this.refs.twitter1).value;
        data.soundCloud = ReactDOM.findDOMNode(this.refs.sound1).value;
        data.hability = ReactDOM.findDOMNode(this.refs.hab1).value;
        data.tags = [ReactDOM.findDOMNode(this.refs.style1).value]
        data.biography = ReactDOM.findDOMNode(this.refs.bio1).value;
        
        this.props.register('LOCAL', data);

        this.setState({ redirect: true })

        localStorage.removeItem('store');

    }
    
    render() {
        if(this.state.redirect)
            return <Redirect to="/"/>
        return (
            <div className="register">
               <div className="card">
                   <form className="row">
                        <p className="col-12">Apenas mais um passo, nós fale sobre você!</p>
                        <input type="text" placeholder="Twitter:" ref="twitter1"/>
                        <input type="text" placeholder="SoundCloud:" ref="sound1"/>
                        <input type="text" placeholder="Instagram:" ref="insta1" />
                        <input type="text" placeholder="Youtube:" ref="yout1"/>
                        <input type="text" placeholder="Habilidade / Instrumento:" ref="hab1"/>
                        <input type="text" placeholder="Estilo Musical:" ref="style1"/>
                        <textarea type="text" ref="bio1" placeholder="Fale, um pouco sobre você, seus objetivos e projetos!"/>
                        <button onClick={this.createUser}> Entrar </button>                                         
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return state
}

const mapStateToDispatch = (dispatch) =>{
    return bindActionCreators({ register }, dispatch);
}


export default connect(mapStateToProps, mapStateToDispatch)(Formulario);