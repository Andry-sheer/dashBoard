
import { 
  SET_LOGIN, 
  SET_PASSWORD,
  SHOW_HIDE_PASSWORD, 
  SET_ERROR,
  CLEAR_ERROR,
  SET_USER,
  SET_USERS,
  CLEAR_USER,
  FETCH_USERS,
  SET_IS_LOADING,
} from "../actionTypes";


const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  login: "",
  password: "",
  isShowHidePassword: true,
  error: null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  isLoadUsers: false,
};

const singInReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_USERS: {
      const { users } = action.payload;

      return {
        ...state,
        users,
        isLoadUsers: true,
        isLoading: false
      }
    }


    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SET_USER:
      return {
        ...state,
        user: action.payload
      }

    case SET_USERS:
      return {
        ...state,
        users: action.payload
      }

    case CLEAR_USER:
      return {
        ...state,
        user: null
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