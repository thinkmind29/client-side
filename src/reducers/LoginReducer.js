const INITIAL_STATE = {
    token: "",
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case 'LOGIN':
            return { ...state, data: action.payload.data, token: action.payload.data.data }
        default:
            return state;
    }

}