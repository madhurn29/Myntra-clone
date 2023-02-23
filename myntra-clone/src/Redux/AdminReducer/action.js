import axios from "axios";

import {
  GET_REQUEST_ADMIN_SIDE,
  GET_REQUEST_SUCCESS_ADMIN_SIDE,
  GET_REQUEST_FAILURE_ADMIN_SIDE,
} from "../ActionTypes";

export const getRequestAdmin = () => {
  return {
    type: GET_REQUEST_ADMIN_SIDE,
  };
};

export const getRequestSuccessAdminSide = (payload, category) => {
  return {
    type: GET_REQUEST_SUCCESS_ADMIN_SIDE,
    payload,
    category: category,
  };
};

export const getRequestFailureAdminSide = () => {
  return {
    GET_REQUEST_FAILURE_ADMIN_SIDE,
  };
};

export const getRequestforAdminSide = (params, category) => (dispatch) => {
  console.log(category);
  console.log(params);
  axios
    .get(`https://easy-gray-wasp-yoke.cyclic.app/${category}`, { params })
    .then((res) => {
      dispatch(getRequestSuccessAdminSide(res.data, category));
      //   console.log(res.data);
    });
};
