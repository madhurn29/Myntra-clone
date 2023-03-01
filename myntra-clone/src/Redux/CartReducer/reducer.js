import {
  GET_REQUEST_CART,
  GET_REQUEST_FAILURE_CART,
  GET_REQUEST_SUCCESS_CART,
} from "../ActionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_REQUEST_CART: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_REQUEST_SUCCESS_CART: {
      return {
        ...state,
        isLoading: false,
        cart: payload,
      };
    }

    case GET_REQUEST_FAILURE_CART: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
