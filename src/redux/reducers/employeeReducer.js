/* eslint-disable default-param-last */
import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_ERROR,
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_ERROR,
  GET_EMPLOYEE,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_ERROR,
  EDIT_EMPLOYEE,
  EDIT_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_ERROR,
  SELECTED_EMPLOYEE,
} from '../types';

const initialState = {
  employees: [],
  dbSync: true, // we need to get the Employee ID from DB
  error: false,
  loading: false,
  editID: null,
  employee: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case EDIT_EMPLOYEE:
    case CREATE_EMPLOYEE:
    case GET_EMPLOYEES:
    case GET_EMPLOYEE:
    case DELETE_EMPLOYEE:
      return {
        ...state,
        loading: true,
      };
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        dbSync: true,
        employees: payload,
      };
    case EDIT_EMPLOYEE_ERROR:
    case CREATE_EMPLOYEE_ERROR:
    case GET_EMPLOYEES_ERROR:
    case DELETE_EMPLOYEE_ERROR:
    case GET_EMPLOYEE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case EDIT_EMPLOYEE_SUCCESS:
    case CREATE_EMPLOYEE_SUCCESS:
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        dbSync: false,
        loading: false,
      };
    case SELECTED_EMPLOYEE:
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        editID: payload.personId,
        employee: payload,
      };
    default:
      return state;
  }
}
