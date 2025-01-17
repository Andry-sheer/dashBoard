
import { API_URL } from "../../constants/constants";
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

export const fetchUsers = () => async (dispatch) => {
    dispatch({
      type: SET_IS_LOADING,
    });

  try {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) => {
      const storedUser = storedUsers.find((u) => u.id === user.id);
      return storedUser ? { ...user, status: storedUser.status } : user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    dispatch({
      type: FETCH_USERS,
      payload: { users: updatedUsers },
    });

  } catch (error) {
    console.log("Error", error);
  }
};

export const setUser = (user) => (dispatch, getState) => {
  const { users } = getState().login;

  const updatedUsers = users.map((u) =>
    u.id === user.id ? { ...u, status: user.status } : u
  );
  
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("users", JSON.stringify(updatedUsers));

    dispatch({
    type: SET_USER,
    payload: user,
  });

  dispatch({
    type: SET_USERS,
    payload: updatedUsers,
  });
};

export const clearUser = () => {
  localStorage.removeItem("user");
    return {
      type: CLEAR_USER,
    }
};

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

