import { GET_JEANS_FAILURE, GET_JEANS_REQUEST, GET_JEANS_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: true,
    jeansData: []
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_JEANS_REQUEST: return { ...state, isLoading: true };
        case GET_JEANS_FAILURE: return { ...state, isError: true, isLoading: false };
        case GET_JEANS_SUCCESS: return { ...state, isLoading: false, jeansData: payload };

        default: return state
    }
}