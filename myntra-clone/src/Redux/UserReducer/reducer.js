import {
  GET_REQUEST_USER,
  GET_REQUEST_FAILURE_USER,
  GET_REQUEST_SUCCESS_USER,
  DELETE_USER_DATA,
} from "../ActionTypes";

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_REQUEST_USER: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_REQUEST_SUCCESS_USER: {
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    }

    case GET_REQUEST_FAILURE_USER: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_USER_DATA: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
