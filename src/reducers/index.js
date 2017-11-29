import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import LoginReducer from './LoginReducer';
import MessageReducer from './MessageReducer';

export default combineReducers({
    user: UsersReducer,
    login: LoginReducer,
    message: MessageReducer
})