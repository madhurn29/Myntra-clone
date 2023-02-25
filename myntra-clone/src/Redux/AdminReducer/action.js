import axios from "axios";

import {
  GET_REQUEST_ADMIN_SIDE,
  GET_REQUEST_SUCCESS_ADMIN_SIDE,
  GET_REQUEST_FAILURE_ADMIN_SIDE,
  PATCH_REQUEST_ADMIN_SIDE,
  PATCH_REQUEST_SUCCESS_ADMIN_SIDE,
  PATCH_REQUEST_FAILURE_ADMIN_SIDE,
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
    type: GET_REQUEST_FAILURE_ADMIN_SIDE,
  };
};

export const patchRequestAdminSide = () => {
  return {
    type: PATCH_REQUEST_ADMIN_SIDE,
  };
};

export const patchRequestSuccessAdminSide = () => {
  return {
    type: PATCH_REQUEST_SUCCESS_ADMIN_SIDE,
  };
};

export const patchRequestFailureAdminSide = () => {
  return {
    type: PATCH_REQUEST_FAILURE_ADMIN_SIDE,
  };
};
export const getRequestforAdminSide = (params, category) => (dispatch) => {
  dispatch(getRequestAdmin());
  axios
    .get(`https://myntra-api-mfh1.onrender.com/${category}`, { params })
    .then((res) => {
      dispatch(getRequestSuccessAdminSide(res.data, category));
      //   console.log(res.data);
    })
    .catch((err) => {
      dispatch(getRequestFailureAdminSide());
    });
};

export const patchRequestforAdminSide = (id, category, obj) => (dispatch) => {
  dispatch(patchRequestAdminSide);

  console.log(id, category, obj, "from action");
  axios
    .patch(`https://myntra-api-mfh1.onrender.com/${category}/${id}`, obj)
    .then((res) => {
      dispatch(patchRequestSuccessAdminSide());
    })
    .catch((err) => {
      dispatch(patchRequestFailureAdminSide());
    });
};

export const deleteRequest = (id, category) => (dispatch) => {
  dispatch(getRequestAdmin());
  return axios
    .delete(`https://myntra-api-mfh1.onrender.com/${category}/${id}`)
    .then((response) => {
      //as we are not expecting amy data so this will be same as patch request..
      dispatch(patchRequestSuccessAdminSide());
    })
    .catch((err) => {
      dispatch(patchRequestFailureAdminSide());
    });
};

export const postRequestAdminSide = (category, data) => (dispatch) => {
  dispatch(getRequestAdmin);
  console.log("action", category, data);
  axios
    .post(`https://myntra-api-mfh1.onrender.com/${category}`, data)
    .then((res) => {
      console.log(res);
      dispatch(patchRequestSuccessAdminSide());
    })
    .then((err) => {
      dispatch(patchRequestFailureAdminSide());
    });
};
