const INITIAL_STATE = {
    user: [],
    selected: null,
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_USER':
            return { ...state, user: action.payload.data };
        case 'SEARCH_USER':
            return { ...state, selected: action.payload.data };
        default:
            return state
    }

    
}