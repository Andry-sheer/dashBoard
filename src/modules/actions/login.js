import { 
  SET_LOGIN, 
  SET_PASSWORD,
  SHOW_HIDE_PASSWORD, 
  SET_ERROR,
  CLEAR_ERROR,
  SET_USER
} from "../actionTypes";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setError = (errorType) => ({
  type: SET_ERROR,
  payload: errorType,
});

export const setLogin = (login) => ({
  type: SET_LOGIN,
  payload: login,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const showHidePassword = () => ({
  type: SHOW_HIDE_PASSWORD,
});

