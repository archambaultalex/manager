import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED
 } from "../actions/types";

//to at least have a value cause cant return undifined
const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case EMAIL_CHANGED:
    //Create new object to trick redux in thinking something changed
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};