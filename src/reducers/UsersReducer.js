const INITIAL_STATE = {
    user: [],
    tag_user: [],
    users: [],
    message: '',
    userSearch: [],
    token: '',
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_USER':
            return { ...state, user: action.payload.data };
        case 'GEt_USER_BY_ID':
            return {...state, userSearch: action.payload.data }
        case 'SEARCH_USER':
            return { ...state, users: action.payload.data };
        case 'SEARCH_USER_TAG':
            return { ...state, tag_user: action.payload.data };
        case 'REGISTER':
            return { ...state, token: action.payload.data.data, message: action.payload.data.message }
        default:
            return state
    }

    
}