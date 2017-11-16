const INITIAL_STATE = {
    user: [],
    tag_user: [],
    users: [],
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_USER':
            return { ...state, user: action.payload.data };
        case 'SEARCH_USER':
            return { ...state, users: action.payload.data };
        case 'SEARCH_USER_TAG':
            return { ...state, tag_user: action.payload.data };
        default:
            return state
    }

    
}