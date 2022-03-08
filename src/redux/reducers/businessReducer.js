/* eslint-disable default-param-last */
import {
  GET_BUSINESSES,
  GET_BUSINESSES_SUCCESS,
  GET_BUSINESSES_ERROR,
  CREATE_BUSINESS,
  CREATE_BUSINESS_SUCCESS,
  CREATE_BUSINESS_ERROR,
  DELETE_BUSINESS,
  DELETE_BUSINESS_SUCCESS,
  DELETE_BUSINESS_ERROR,
  GET_BUSINESS,
  GET_BUSINESS_SUCCESS,
  GET_BUSINESS_ERROR,
  EDIT_BUSINESS,
  EDIT_BUSINESS_SUCCESS,
  EDIT_BUSINESS_ERROR,
  SELECTED_BUSINESS,
} from '../types';

const initialState = {
  businesses: [],
  dbSync: true, // we need to get the Employee ID from DB
  error: false,
  loading: false,
  editID: null,
  business: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BUSINESS:
    case GET_BUSINESSES:
    case EDIT_BUSINESS:
    case GET_BUSINESS:
    case DELETE_BUSINESS:
      return {
        ...state,
        loading: true,
      };
    case GET_BUSINESSES_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        dbSync: true,
        businesses: payload,
      };
    case CREATE_BUSINESS_ERROR:
    case GET_BUSINESSES_ERROR:
    case EDIT_BUSINESS_ERROR:
    case DELETE_BUSINESS_ERROR:
    case GET_BUSINESS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CREATE_BUSINESS_SUCCESS:
    case DELETE_BUSINESS_SUCCESS:
    case EDIT_BUSINESS_SUCCESS:
      return {
        ...state,
        dbSync: false,
        loading: false,
      };
    case SELECTED_BUSINESS:
    case GET_BUSINESS_SUCCESS:
      return {
        ...state,
        editID: payload.businessId,
        business: payload,
      };
    default:
      return state;
  }
}
