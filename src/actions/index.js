import axios from 'axios';

const REQUEST_URL = '';


export const fetchUser = (token) => {
    const request = axios.get(`${REQUEST_URL}/user/${token}`);

    return {
        type: 'GET_USER',
        payload: requet
    }
}

export const searchUser = (id) => {
    const request = axios.get(`${REQUEST_URL}/user/${id}`);

    return{
        type: 'SEARCH_USER',
        payload: request
    }
}