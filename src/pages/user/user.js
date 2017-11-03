import insta from '../../icons/iconInsta.jpg';
import sound from '../../icons/iconSound.jpg';
import yout from '../../icons/iconYout.jpg';
import twitter from '../../icons/iconTwi.jpg';
import React from 'react';
import * as $ from 'jquery';
import { URL_USER } from "../../tools/consts";
import { Redirect } from 'react-router-dom';
import Image from '../../components/mini-components/image';
import Social from '../../components/mini-components/social';

import user from './user.css';

class User extends React.Component {
   
   
   constructor(props) {
       super(props);

       this.state = {
            nome: '',
            idade: 0,
            email: '',
            habilidade: '',
            img: 'http://e-cdn-images.deezer.com/images/artist/bd29f4b2524b1bb5126ef3fa7976566a/200x200-000000-80-0-0.jpg',
            cidade: '',
            estado: '',
            bio: '',
            pais: '',
            insta: '',
            sound: '',
            youtube: '',
            twitter: '',
            cover: 'https://optclean.com.br/wp-content/uploads/2016/11/capa-para-facebook3.jpg',
            redirect: false
       }
       
   }
   

   sair = () => {

        localStorage.removeItem('user');
        this.setState({ 
            redirect: true 
        });

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

        if(this.state.redirect){
            return <Redirect to="/login" />
        }
        
        return (
            <div className="user">
                    <div className="row">
                        <Image classe="cover" photo={this.state.cover} />
                    </div>
                    <div className="row"> 
                        <Image classe="profile" photo={this.state.img} />
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <Social img={insta} link={`https://instagram.com/${this.state.insta}`} classe="badge" cl="linkSocial"/>
                            <Social img={twitter} link={`https://twitter.com/${this.state.twitter}`} classe="badge" cl="linkSocial"/>
                            <Social img={sound} link={`https://soundcloud.com/${this.state.sound}`} classe="badge" cl="linkSocial"/>
                            <Social img={yout} link={`https://youtube.com/${this.state.youtube}`} classe="badge" cl="linkSocial"/>
                            
                        </div>
                        <p className="nome col-4">{this.state.nome}, {this.state.idade} anos</p>
                    
                    <div className="atributos col-4">
                        <p><img src="" alt="Local: "/> {this.state.cidade}, {this.state.pais}</p>
                        <p><img src="" alt="Habilidade: "/> {this.state.habilidade}</p>
                        <p><img src="" alt="Estilos: "/> {this.state.tags} </p>                      
                    </div>              
                    </div>     
                    <div className='biografia'>
                        <h1>Sobre Mim</h1>
                        <p>
                            {this.state.bio}   
                        </p>
                    </div>
                </div>     
        );
    }
}




export default User;