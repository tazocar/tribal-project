import { combineReducers } from 'redux';
import businessReducer from './businessReducer';
import employeeReducer from './employeeReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  business: businessReducer,
  employee: employeeReducer,
  modal: modalReducer,
});
