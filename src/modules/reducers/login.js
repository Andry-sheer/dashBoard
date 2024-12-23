
import { 
  SET_LOGIN, 
  SET_PASSWORD,
  SHOW_HIDE_PASSWORD, 
  SET_ERROR,
  CLEAR_ERROR,
  SET_USER
} from "../actionTypes";

const initialState = {
  login: "",
  password: "",
  isShowHidePassword: true,
  error: null,
  user: ""
}

const singInReducer = (state = initialState, action) => {
  switch (action.type) {

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