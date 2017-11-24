import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import Image from './image';
import Social from './social';

import insta from '../img/instagram.png';
import sound from '../img/soundcloud.png';
import yout from '../img/youtube.png';
import local from '../img/local.png';
import piano from '../img/piano.png';
import metronome from '../img/metrone.png';
import twit from '../img/twitter.png';

class UserPage extends Component {
   
    constructor(props){
        super(props);
        if(localStorage.getItem('user') === undefined || localStorage.getItem('user') === null)
            localStorage.setItem('user', props.location.state.token);
        this.state = {id: localStorage.getItem('user')}
    }

   componentDidMount() {
     this.props.fetchUser(this.state.id);
   }

   
   render() {

        
        const { user } = this.props.user;
        const { name, photo, biography, 
                instagram, youtube, soundCloud,
                age, hability, state,
                tags, twitter, city, _id
         } = user;
         
         sessionStorage.setItem('chat', _id);
         

       if(!user)
            return <p>Loading...</p>

        return (
            <div>         
                <div className="user">
                    <div className="row">    
                        <div className="col-3  container">
                            <Image classe="profile social" photo={ photo } />
                            <p> { name }, { age }, anos </p>

                            <div className="social">
                                <Social img={insta} link={`https://instagram.com/${ instagram }`} classe="badge" />
                                <Social img={twit} link={`https://twitter.com/${ twitter }`} classe="badge" />
                                <Social img={sound} link={`https://soundcloud.com/${ soundCloud }`} classe="badge" />
                                <Social img={yout} link={`https://youtube.com/${ youtube }`} classe="badge" />
                            </div>
        
                            <p><Image photo={piano} classe="icons"/> {hability}</p>
                            <p><Image photo={metronome} classe="icons"/> {tags}</p>
                            <p> <Image photo={local} classe="icons"/> {city}, {state}</p>
                        </div>

                        <div className="col-9 information">
                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/YelUX18albY"></iframe>
                        <div className='biografia'>
                            <h1>Sobre Mim</h1>
                            <p>
                                { biography }   
                            </p>
                        </div>
                        </div>
                </div>
            </div> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
};
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ fetchUser }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);