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

import axiosClient from '../../config/axios';

const getBusinesses = () => ({
  type: GET_BUSINESSES,
});

const getBusinessesSuccess = business => ({
  type: GET_BUSINESSES_SUCCESS,
  payload: business,
});

const getBusinessesError = state => ({
  type: GET_BUSINESSES_ERROR,
  payload: state,
});

export function getBusinessesAction() {
  return async dispatch => {
    dispatch(getBusinesses());
    try {
      const result = await axiosClient.get('/business');
      dispatch(getBusinessesSuccess(result.data.businesses));
    } catch (error) {
      dispatch(getBusinessesError(true));
    }
  };
}

const createBusiness = () => ({
  type: CREATE_BUSINESS,
});

const createBusinessSuccess = () => ({
  type: CREATE_BUSINESS_SUCCESS,
});

const createBusinessError = state => ({
  type: CREATE_BUSINESS_ERROR,
  payload: state,
});
export function createBusinessAction(business) {
  return async dispatch => {
    dispatch(createBusiness());
    try {
      await axiosClient.post('/business', business);
      dispatch(createBusinessSuccess());
    } catch (error) {
      dispatch(createBusinessError(true));
    }
  };
}

const deleteBusiness = () => ({
  type: DELETE_BUSINESS,
});

const deleteBusinessSuccess = () => ({
  type: DELETE_BUSINESS_SUCCESS,
});

const deleteBusinessError = state => ({
  type: DELETE_BUSINESS_ERROR,
  payload: state,
});
export function deleteBusinessAction(businessID) {
  return async dispatch => {
    dispatch(deleteBusiness());
    try {
      await axiosClient.delete(`/business/${businessID}`);
      dispatch(deleteBusinessSuccess());
    } catch (error) {
      dispatch(deleteBusinessError(true));
    }
  };
}

const getBusiness = () => ({
  type: GET_BUSINESS,
});

const getBusinessSuccess = businessID => ({
  type: GET_BUSINESS_SUCCESS,
  payload: businessID,
});

const getBusinessError = state => ({
  type: GET_BUSINESS_ERROR,
  payload: state,
});
export function getBusinessAction(businessID) {
  return async dispatch => {
    dispatch(getBusiness());
    try {
      const result = await axiosClient.get(`/business/${businessID}`);
      dispatch(getBusinessSuccess(result.data));
    } catch (error) {
      dispatch(getBusinessError(true));
    }
  };
}

const selectedBussines = business => ({
  type: SELECTED_BUSINESS,
  payload: business,
});
export function selectedBussinesAction(business) {
  return async dispatch => {
    dispatch(selectedBussines(business));
  };
}

const editBusiness = () => ({
  type: EDIT_BUSINESS,
});

const editBusinessSuccess = businessID => ({
  type: EDIT_BUSINESS_SUCCESS,
  payload: businessID,
});

const editBusinessError = state => ({
  type: EDIT_BUSINESS_ERROR,
  payload: state,
});

export function editBusinessAction(businessID, business) {
  return async dispatch => {
    dispatch(editBusiness());
    try {
      const result = await axiosClient.put(`/business/${businessID}`, business);
      dispatch(editBusinessSuccess(result.data));
    } catch (error) {
      dispatch(editBusinessError(true));
    }
  };
}
