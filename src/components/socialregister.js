import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { register } from   '../actions';




class SocailRegister extends Component {
    
    
        register = (event) =>{
            event.preventDefault();
    
            var info = localStorage.getItem('store');
            var data = JSON.parse(info);
    
            data.city = ReactDOM.findDOMNode(this.refs.city).value;
            data.age = ReactDOM.findDOMNode(this.refs.age).value;
            data.state = ReactDOM.findDOMNode(this.refs.state).value;
            data.nation = ReactDOM.findDOMNode(this.refs.nation).value;
            data.instagram = ReactDOM.findDOMNode(this.refs.insta).value;
            data.youtube = ReactDOM.findDOMNode(this.refs.yout).value;
            data.twitter = ReactDOM.findDOMNode(this.refs.twitter).value;
            data.soundCloud = ReactDOM.findDOMNode(this.refs.sound).value;
            data.hability = ReactDOM.findDOMNode(this.refs.hab).value;
            data.tags = [ReactDOM.findDOMNode(this.refs.style).value]
            data.biography = ReactDOM.findDOMNode(this.refs.bio).value;

            this.props.register(data.provider, data);
        } 
    
    
        render() {
    
            
            if(this.props.token !== "" && this.props.token !== undefined)
                return <Redirect to={{pathname: '/user', state :{token: this.props.token}}} />
           
            return (             
                 <div className="register">
                   <div className="card">
                       <form className="row">
                            <p className="col-12">Apenas mais um passo, nós fale sobre você!</p>
                            <input type="number" placeholder="Idade:" ref="age"/>
                            <input type="text" placeholder="Twitter:" ref="twitter"/>
                            <input type="text" placeholder="SoundCloud:" ref="sound"/>
                            <input type="text" placeholder="Instagram:" ref="insta" />
                            <input type="text" placeholder="Youtube:" ref="yout"/>
                            <input type="text" placeholder="Habilidade / Instrumento:" ref="hab"/>
                            <input type="text" placeholder="Estilo Musical:" ref="style"/>
                            <input type="text" placeholder="Cidade" ref="city"/>                       
                            <input type="text" placeholder="Estado:" ref="state"/>                   
                            <input type="text" placeholder="País:" ref="nation"/>
                            <textarea type="text" ref="bio" placeholder="Fale, um pouco sobre você, seus objetivos e projetos!"/>
                            <button onClick={this.register}> Register </button>                                       
                        </form>
                    </div>
                </div>
        );
    }
}
    

const mapStateToProps = (state) => {
    return { user: state, token: state.user.token, message: state.user.message }
};

const mapStateToDispatch = (dispatch) => {
    return bindActionCreators({ register }, dispatch);
}

export default connect(mapStateToProps, mapStateToDispatch)(SocailRegister);