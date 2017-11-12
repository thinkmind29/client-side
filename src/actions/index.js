import axios from 'axios';

const REQUEST_URL = 'https://musically.herokuapp.com/user';


export const fetchUser = (token) => {
    const request = axios.get(`${REQUEST_URL}/${token}`);

    return {
        type: 'GET_USER',
        payload: request
    }
}

export const searchUser = (param, param2) => {
    const request = axios.get(`${REQUEST_URL}/${param}/${param2}`)
    return{
        type: 'SEARCH_USER',
        payload: request
    }
}


export const login = (data) => {
    console.log(data);
    switch(data.type){
        case 'LOCAL':
            const request = axios.post(`${REQUEST_URL}/login`, data);
            return {
                type: 'LOGIN',
                payload: request
            }
        case 'FACEBOOK':
            console.log(data);
            const faceRequest = axios.get(`${REQUEST_URL}/auth/${data.id}`);
            return {
                type: 'LOGIN',
                payload: faceRequest
            }
        case 'GOOGLE':
            console.log(data);
            const googleRequest = axios.get(`${REQUEST_URL}/auth/${data.id}`);
            return {
                type: 'LOGIN',
                payload: googleRequest
            }
        default:
            return null;
    }

}

