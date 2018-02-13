import axios from 'axios';
import { FETCH_USER } from './types';
import { SET_USERNAME } from './types';

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
export const setUserName = (userName) => (dispatch) => {
  console.log(userName);
  dispatch({ type: SET_USERNAME, payload: userName });
}
