import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
    user: UsersReducer,
    login: LoginReducer
})