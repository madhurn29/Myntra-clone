import {
  GET_REQUEST_ADMIN_SIDE,
  GET_REQUEST_FAILURE_ADMIN_SIDE,
  GET_REQUEST_SUCCESS_ADMIN_SIDE,
  PATCH_REQUEST_ADMIN_SIDE,
  PATCH_REQUEST_FAILURE_ADMIN_SIDE,
  PATCH_REQUEST_SUCCESS_ADMIN_SIDE,
} from "../ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  mens_jeans: [],
  mens_tshirt: [],
  womens_kurtas: [],
  womens_tops: [],
};
export const reducer = (state = initialState, action) => {
  const { type, payload, category } = action;
  switch (type) {
    case GET_REQUEST_ADMIN_SIDE: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_REQUEST_SUCCESS_ADMIN_SIDE: {
      //   console.log(category);

      if (category === "men-jeans") {
        return {
          ...state,
          isLoading: false,
          mens_jeans: payload,
        };
      }

      if (category === "men-t-shirts") {
        return {
          ...state,
          isLoading: false,
          mens_tshirt: payload,
        };
      }

      if (category === "women-kurtas-suits") {
        return {
          ...state,
          isLoading: false,
          womens_kurtas: payload,
        };
      }

      if (category === "women-tops") {
        return {
          ...state,
          isLoading: false,
          womens_tops: payload,
        };
      }
    }
    case GET_REQUEST_FAILURE_ADMIN_SIDE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case PATCH_REQUEST_ADMIN_SIDE: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case PATCH_REQUEST_SUCCESS_ADMIN_SIDE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case PATCH_REQUEST_FAILURE_ADMIN_SIDE: {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
  }
};
