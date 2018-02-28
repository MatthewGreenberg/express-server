import axios from 'axios';
import { FETCH_USER } from './types';
import { SET_USERNAME } from './types';
import { SET_PASSWORD } from './types';
import { SET_EMAIL } from './types';



// Fetch User
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Sign Up
export const setUsername = (username) => (dispatch) => {
  dispatch({ type: SET_USERNAME, payload: username });
}

export const setPassword = (password) => (dispatch) => {
  dispatch({ type: SET_PASSWORD, payload: password });
}

export const setEmail = (email) => (dispatch) => {
  dispatch({ type: SET_EMAIL, payload: email });
}

export const submitUser = (props) => async (dispatch) => {
  const res = await axios.post('/api/signup', {
    password: props.password,
    email: props.email
  });
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logIn = (props) => async (dispatch) => {
  const res = await axios.post('/api/login', {
    password: props.password,
    email: props.email
  });
  console.log('res is:', res);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Send Survey

export const submitSurvey = values => {
  return {type: 'submitSurvey'};
};
