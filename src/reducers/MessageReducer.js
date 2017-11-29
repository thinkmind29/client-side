const INITIAL_STATE = {
   message: [],
   resposta: '',
   message_recept: [],
   message_send: []
}

export default (state = INITIAL_STATE, action) => {
    // console.log(action.payload);
    switch(action.type){

        case 'GET':
            return { message: action.payload.data };  
        default:
            return state;    
    }
}