import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    //name of property of state
    auth: AuthReducer
});


