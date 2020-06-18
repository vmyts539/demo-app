import { combineReducers } from 'redux';
import search from './searchReducer';
import user from './userReducer'

export default combineReducers({ search, user});
