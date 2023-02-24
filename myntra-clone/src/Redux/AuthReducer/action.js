import * as types from "./actionTypes";

export const login = (logout) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_REQUEST });

  try {
    logout == "logout"
      ? dispatch({ type: types.GET_LOGOUT_SUCCESS })
      : dispatch({ type: types.GET_LOGIN_SUCCESS });
  } catch (error) {
    dispatch({ type: types.GET_LOGIN_FAILURE });
  }
};
