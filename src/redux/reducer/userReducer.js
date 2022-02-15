import {
  GET_CURRENT_USER,
  IS_AUTHORIZED,
  IS_LOGOUT,
  IS_UTHORIZED_LOADING,
  SET_USER_ERROR,
} from "../constants.js";

const initialState = {
  isAuthorized: !!localStorage.token,
  currEmail: null,
  error: null,
  isLoading: false,
  name: "",
  avatar: "",
};

export const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case IS_UTHORIZED_LOADING:
      return { ...state, isLoading: true };
    case IS_AUTHORIZED:
      return {
        ...state,
        isAuthorized: true,
        currEmail: payload.email,
        name: payload.name,
        isLoading: false,
        avatar: payload.avatar,
      };

    case GET_CURRENT_USER:
      return {
        ...state,
        isAuthorized: true,
        currEmail: payload.email,
        name: payload.name,
        isLoading: false,
        avatar: payload.avatar,
      };
    case IS_LOGOUT:
      return { ...state, isAuthorized: false, error: null, currEmail: null };
    case SET_USER_ERROR:
      return { ...state, error: payload, isLoading: true };
    default:
      return state;
  }
};
