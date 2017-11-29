const INITIAL_STATE = {
    token: "",
    message: ""
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case 'LOGIN':
            return { ...state, data: action.payload.data, token: action.payload.data.data, message: action.payload.data.message }
        default:
            return state;
    }

}