import { GET_JEANS_FAILURE, GET_JEANS_REQUEST, GET_JEANS_SUCCESS } from "./actionType"
import axios from "axios"

export const getJeansData = (dispatch) => {
    dispatch({ type: GET_JEANS_REQUEST });
    console.log("umer")
    axios.get(`https://easy-gray-wasp-yoke.cyclic.app/men-jeans`)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: GET_JEANS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log('err:', err);
            dispatch({ type: GET_JEANS_FAILURE });

        })
};

