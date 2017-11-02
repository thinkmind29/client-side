import React from 'react';
import * as $ from 'jquery';
import { URL_USER } from "../../tools/consts";
import { Redirect } from 'react-router-dom';

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
    } catch(e){
        this.setState({
            nome: '',
            idade: 0,
            email: '',
            habilidade: '',
            img: '',
            bio: '',
            cidade: '',
            estado: '',
            pais: '',
            tags: '',
            redirect: false
        })
    }

   }
   
   
    render() {

        if(this.state.redirect){
            return <Redirect to="/login" />
        }
        
        return (
            <div className="user">
                    <div className="row">
                        <img className="cover" src={this.state.cover} />   
                    </div>
                    <div className="row"> 
                        <img className="profile" src={this.state.img} />
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <p>{this.state.insta}</p>
                            <p>{this.state.sound}</p>
                            <p>{this.state.twitter}</p>
                            <p>{this.state.youtube}</p>
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