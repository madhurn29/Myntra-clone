import axios from "axios";
import * as types from "./actionTypes";

export const login = (logout) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_REQUEST });

  try {
    logout === "logout"
      ? dispatch({ type: types.GET_LOGOUT_SUCCESS })
      : dispatch({ type: types.GET_LOGIN_SUCCESS });
  } catch (error) {
    dispatch({ type: types.GET_LOGIN_FAILURE });
  }
};

export const loginRequest = (number) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_REQUEST });
  return axios
    .get(`https://myntra-api-mfh1.onrender.com/users?mobile=${number}`)
    .then((res) => {
      if (res.data.length > 0) {
        dispatch({ type: types.GET_LOGIN_SUCCESS });
      } else {
        dispatch({ type: types.GET_LOGIN_HALTED });
      }
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: types.GET_LOGIN_FAILURE });
      return err;
    });
};

export const postLoginRequest = (obj) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_REQUEST });
  return axios
    .post("https://myntra-api-mfh1.onrender.com/users", obj)
    .then((res) => {
      dispatch({ type: types.GET_LOGIN_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.GET_LOGIN_FAILURE });
      return err;
    });
};

export const AdminLogin = (number) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_REQUEST });
  return axios
    .get(`https://myntra-api-mfh1.onrender.com/Admin?mobile=${number}`)
    .then((res) => {
      dispatch({ type: types.ADMIN_LOGIN_SUCCESS });

      return res.data;
    })
    .catch((err) => {
      dispatch({ type: types.GET_LOGIN_FAILURE });
      return err;
    });
};
