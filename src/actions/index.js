import axios from 'axios';

const REQUEST_URL = 'https://musically.herokuapp.com/user';


export const fetchUser = (token) => {
    const request = axios.get(`${REQUEST_URL}/${token}`);

    return {
        type: 'GET_USER',
        payload: request
    }
}

export const searchUser = (type, param, param2,) => {
    switch(type){
        case 'SEARCH':
            const request = axios.get(`${REQUEST_URL}/${param}/${param2}`)
            return{
                type: 'SEARCH_USER',
                payload: request
            }
        case 'GET':
            const request_user = axios.get(REQUEST_URL);
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

export const register = (type, data) => {

        switch(type){
            case 'LOCAL':
                const request = axios.post(REQUEST_URL, data);
                return {
                    type: 'LOCAL',
                    payload: request
                }
            case 'FACEBOOK':
                const request_facebook = axios.post(`${REQUEST_URL}/auth`, data)
            case 'GOOGLE':
                const request_google = axios.post(`${REQUEST_URL}/auth`, data)
                return 3
            default:
                return 4
        }

}

