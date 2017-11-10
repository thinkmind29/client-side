import insta from '../../icons/instagram.png';
import sound from '../../icons/soundcloud.png';
import yout from '../../icons/youtube.png';
import local from '../../icons/local.png';
import piano from '../../icons/piano.png';
import metronome from '../../icons/metrone.png';

import twitter from '../../icons/twitter.png';
import React from 'react';
import * as $ from 'jquery';
import { URL_USER } from "../../tools/consts";
import { Redirect } from 'react-router-dom';
import Image from '../../components/mini-components/image';
import Social from '../../components/mini-components/social';
import './user.css';

class User extends React.Component {
   
   
   constructor(props) {
       super(props);

       this.state = {
            nome: '',
            idade: 0,
            email: '',
            habilidade: '',
            photo: '',
            cidade: '',
            estado: '',
            bio: '',
            pais: '',
            insta: '',
            sound: '',
            youtube: '',
            twitter: '',
            redirect: false
       }
       
   }
   

   componentDidMount(){

    try{
        const serialized = localStorage.getItem('user');
        const token = JSON.parse(serialized);
        
        $.ajax({
            method: 'GET',
            url: URL_USER + token.data,
            dataType: 'json'
        }).then( data =>{
                this.setState({
                    nome: data.name,
                    idade: data.age,
                    photo: data.photo,
                    email: data.email,
                    habilidade: data.hability,
                    cidade: data.city,
                    estado: data.state,
                    pais: data.nation,
                    tags: data.tags,
                    insta: data.instagram,
                    twitter: data.twitter,
                    sound: data.soundCloud,
                    youtube: data.youtube,
                    bio: data.biography,
                    redirect: false
                })
        })
    } catch(e){ throw e; }

   }
   
   
    render() {


        return (
            <div className="user">
                <div className="row">
                        
                    <div className="col-3  container">
                        <Image classe="profile social" photo={this.state.photo} />
                        <p className="center"> {this.state.nome} </p>
                        <br />
                        <div className="social">
                            <Social img={insta} link={`https://instagram.com/${this.state.insta}`} classe="badge" cl="linkSocial"/>
                            <Social img={twitter} link={`https://twitter.com/${this.state.twitter}`} classe="badge" cl="linkSocial"/>
                            <Social img={sound} link={`https://soundcloud.com/${this.state.sound}`} classe="badge" cl="linkSocial"/>
                            <Social img={yout} link={`https://youtube.com/${this.state.youtube}`} classe="badge" cl="linkSocial"/>
                            </div>
                            <br />
                            <br />
                            <br />
                        <p> <Image photo={piano} classe="icons"/> {this.state.habilidade}</p>
                        <p><Image photo={metronome} classe="icons"/> {this.state.tags}</p>
                        <p> <Image photo={local} classe="icons"/> {this.state.cidade}, {this.state.estado}</p>
                    </div>

                    <div className="col-9 information">
                    <iframe width="100%" height="450" src="https://www.youtube.com/embed/YelUX18albY" frameborder="0" allowfullscreen></iframe>
                    <div className='biografia'>
                        <h1>Sobre Mim</h1>
                        <p>
                            {this.state.bio}   
                        </p>
                    </div>
                    </div>
                </div>
            </div> 
        );
    }
}




export default User;