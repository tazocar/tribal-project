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

import axiosClient from '../../config/axios';

const getEmployees = () => ({
  type: GET_EMPLOYEES,
});

const getEmployeesSuccess = employees => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload: employees,
});

const getEmployeesError = state => ({
  type: GET_EMPLOYEES_ERROR,
  payload: state,
});

export function getEmployeesAction(businessId) {
  return async dispatch => {
    dispatch(getEmployees());
    try {
      const result = await axiosClient.get(`/business/${businessId}/persons`);
      dispatch(getEmployeesSuccess(result.data.persons));
    } catch (error) {
      dispatch(getEmployeesError(true));
    }
  };
}

const createEmployee = () => ({
  type: CREATE_EMPLOYEE,
});

const createEmployeeSuccess = () => ({
  type: CREATE_EMPLOYEE_SUCCESS,
});

const createEmployeeError = state => ({
  type: CREATE_EMPLOYEE_ERROR,
  payload: state,
});

export function createEmployeeAction(businessId, employee) {
  return async dispatch => {
    dispatch(createEmployee());
    try {
      await axiosClient.post(`business/${businessId}/persons`, employee);
      dispatch(createEmployeeSuccess());
    } catch (error) {
      dispatch(createEmployeeError(true));
    }
  };
}

const deleteEmployee = () => ({
  type: DELETE_EMPLOYEE,
});

const deleteEmployeeSuccess = () => ({
  type: DELETE_EMPLOYEE_SUCCESS,
});

const deleteEmployeeError = state => ({
  type: DELETE_EMPLOYEE_ERROR,
  payload: state,
});

export function deleteEmployeeAction(businessId, employeeId) {
  return async dispatch => {
    dispatch(deleteEmployee());
    try {
      await axiosClient.delete(`/business/${businessId}/persons/${employeeId}`);
      dispatch(deleteEmployeeSuccess());
    } catch (error) {
      dispatch(deleteEmployeeError(true));
    }
  };
}

const getEmployee = () => ({
  type: GET_EMPLOYEE,
});

const getEmployeeSuccess = employeeId => ({
  type: GET_EMPLOYEE_SUCCESS,
  payload: employeeId,
});

const getEmployeeError = state => ({
  type: GET_EMPLOYEE_ERROR,
  payload: state,
});

export function getEmployeeAction(businessId, employeeId) {
  return async dispatch => {
    dispatch(getEmployee());
    try {
      const result = await axiosClient.get(`/business/${businessId}/persons/${employeeId}`);
      dispatch(getEmployeeSuccess(result.data));
    } catch (error) {
      dispatch(getEmployeeError(true));
    }
  };
}

const selectedEmployee = employee => ({
  type: SELECTED_EMPLOYEE,
  payload: employee,
});

export function selectedEmployeeAction(employee) {
  return async dispatch => {
    dispatch(selectedEmployee(employee));
  };
}

const editEmployee = () => ({
  type: EDIT_EMPLOYEE,
});

const editEmployeeSuccess = employeeId => ({
  type: EDIT_EMPLOYEE_SUCCESS,
  payload: employeeId,
});

const editEmployeeError = state => ({
  type: EDIT_EMPLOYEE_ERROR,
  payload: state,
});

export function editEmployeeAction(businessId, employeeId, employee) {
  return async dispatch => {
    dispatch(editEmployee());
    try {
      const result = await axiosClient.put(`/business/${businessId}/persons/${employeeId}`, employee);
      dispatch(editEmployeeSuccess(result.data));
    } catch (error) {
      dispatch(editEmployeeError(true));
    }
  };
}
