import * as types from "./actionTypes";

const initialState = {
  isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type }) => {
  switch (type) {
    case types.GET_LOGIN_REQUEST:
      console.log("isloading");
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_LOGIN_SUCCESS:
      localStorage.setItem("isAuth", true);

      return {
        ...state,
        isLoading: false,
        isAuth: true,
      };
    case types.GET_LOGIN_HALTED:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
      };
    case types.GET_LOGOUT_SUCCESS:
      localStorage.setItem("isAuth", false);

      return {
        ...state,
        isLoading: false,
        isAuth: false,
      };
    case types.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.GET_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
