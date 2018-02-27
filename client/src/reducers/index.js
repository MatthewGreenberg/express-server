import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';

export default combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  form: reduxForm
});