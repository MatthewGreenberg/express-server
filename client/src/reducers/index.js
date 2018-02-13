import { combineReducers } from 'redux';
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';

export default combineReducers({
  auth: authReducer,
  signUp: signUpReducer
});