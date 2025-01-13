
import { 
  SET_LOGIN, 
  SET_PASSWORD,
  SHOW_HIDE_PASSWORD, 
  SET_ERROR,
  CLEAR_ERROR,
  SET_USER,
  FETCH_USERS,
  SET_JWT,
  CLEAR_JWT
} from "../actionTypes";

const initialState = {
  login: "",
  password: "",
  isShowHidePassword: true,
  error: null,
  users: [],
  user: "",
  jwt: null,

}

const singInReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      }

    case SET_USER:
      return {
        ...state,
        user: action.payload
      }

    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    case SET_ERROR:
        return {
          ...state,
          error: action.payload
        };

    case SET_LOGIN:
        return {
          ...state,
          login: action.payload
        };

    case SET_PASSWORD:
        return {
          ...state,
          password: action.payload
        };

    case SHOW_HIDE_PASSWORD:
      return {
        ...state,
        isShowHidePassword: !state.isShowHidePassword
      }


    default:
      return state;
  }
}

export default singInReducer;