import {
  GET_REQUEST_CART,
  GET_REQUEST_FAILURE_CART,
  GET_REQUEST_SUCCESS_CART,
} from "../ActionTypes";

export const getCart = () => {
  return {
    type: GET_REQUEST_CART,
  };
};

export const getCartSuccess = (payload) => {
  return {
    type: GET_REQUEST_SUCCESS_CART,
    payload,
  };
};

export const getCartError = () => {
  return {
    type: GET_REQUEST_FAILURE_CART,
  };
};


