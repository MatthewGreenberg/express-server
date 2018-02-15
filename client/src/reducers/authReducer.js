import {FETCH_USER} from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log('action payload is:', action.payload);
      return action.payload === '' ? false : action.payload;
    default:
      return state;
  }
}