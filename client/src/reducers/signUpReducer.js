import { SET_USERNAME } from '../actions/types';
import { SET_EMAIL } from '../actions/types';
import { SET_PASSWORD } from '../actions/types';



const initialState = {
  userName: '',
  password: '',
  email: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        userName: action.payload
      }

      case SET_PASSWORD:
      return {
        ...state,
        password: action.payload
      }

      case SET_EMAIL:
      return {
        ...state,
        email: action.payload
      }

    default:
      return state
  }
}
