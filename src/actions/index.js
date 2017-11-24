import axios from 'axios';

const REQUEST_URL = 'https://musically.herokuapp.com';
const id = sessionStorage.getItem('chat');


export const fetchUser = (token) => {
    const request = axios.get(`${REQUEST_URL}/user/${token}`);

    return {
        type: 'GET_USER',
        payload: request
    }
}
export const fetchUserById = (id) => {
    const request = axios.get(`${REQUEST_URL}/user/id/${id}`)
    return{
        type: 'GET_USER',
        payload: request
    }
}

export const searchUser = (type, param, param2,) => {
    switch(type){
        case 'SEARCH':
            const request = axios.get(`${REQUEST_URL}/user/${param}/${param2}`)
            return{
                type: 'SEARCH_USER',
                payload: request
            }
        case 'GET':
            const request_user = axios.get(`${REQUEST_URL}/user`);
            return{
                type: 'SEARCH_USER_TAG',
                payload: request_user
            }
        default:
            return null
    }
    
}

export const login = (data) => {
    console.log(data);
    switch(data.type){
        case 'LOCAL':
            const request = axios.post(`${REQUEST_URL}/user/login`, data);
            return {
                type: 'LOGIN',
                payload: request
            }
        case 'FACEBOOK':
            console.log(data);
            const faceRequest = axios.get(`${REQUEST_URL}/user/auth/${data.id}`);
            return {
                type: 'LOGIN',
                payload: faceRequest
            }
        case 'GOOGLE':
            console.log(data);
            const googleRequest = axios.get(`${REQUEST_URL}/user/auth/${data.id}`);
            return {
                type: 'LOGIN',
                payload: googleRequest
            }
        default:
            return null;
    }

}

export const register = (type, data) => {

        switch(type){
            case 'LOCAL':
                const request = axios.post(`${REQUEST_URL}/user`, data);
                return {
                    type: 'REGISTER',
                    payload: request
                }
            case 'FACEBOOK':
                const request_facebook = axios.post(`${REQUEST_URL}/user/registerSocial`, data)
                return{
                    type: 'REGISTER',
                    payload: request_facebook
                }
            case 'GOOGLE':
                const request_google = axios.post(`${REQUEST_URL}/user/registerSocial`, data)
                return {
                    type: 'REGISTER',
                    payload: request_google
                }
            default:
                return {
                    type: 'REGISTER',
                    payload: []
                }
        }

}

export const chat =  (type, data) => {

    switch(type){
        case 'POST_SEND':
            // const request =  axios.post(`${REQUEST_URL}/chat`, data);
            const request =  axios.post(`http://localhost:5000/chat`, data);
        case 'GET':
            const request_get = axios.get(`${REQUEST_URL}/chat/${data.remetente_id}/${data.destinatario_id}`);  
            return{
                type: 'GET',
                payload: request_get
            }
    }
}

