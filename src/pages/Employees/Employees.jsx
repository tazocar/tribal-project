import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Redux Actions
import { hideModalAction, showModalAction } from '../../redux/actions/modalActions';
import { getEmployeesAction, deleteEmployeeAction } from '../../redux/actions/employeeActions';

import { MainTitle } from '../../components/Heading/StyledHeading';
import Modal from '../../components/Modal/Modal';
import EmployeeTableList from '../../components/EmployeeTableList/EmployeeTableList';
import FormEmployee from '../../components/FormEmployee/FormEmployee';
import FormConfirm from '../../components/FormConfirm/FormConfirm';

function Employees() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hideModal = () => dispatch(hideModalAction());
  const showModal = modalState => dispatch(showModalAction(modalState));
  const getEmployees = businessID => dispatch(getEmployeesAction(businessID));
  const deleteEmployee = (businessId, employeeId) => dispatch(deleteEmployeeAction(businessId, employeeId));
  const modalReducerState = useSelector(state => state.modal);
  const businessesState = useSelector(state => state.business);
  const employeesState = useSelector(state => state.employee);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // If you didn't to this url by clicking on an element but directly typing url, redirect.
    if (businessesState.business !== null) return getEmployees(businessesState.business.businessId);
    return navigate('/business');
  }, []);

  // Check for changes and set Employee State
  useEffect(() => {
    setEmployees(employeesState.employees);
  }, [employeesState]);

  // Check for sync with BD after modifying Business if not, update State
  useEffect(() => {
    if (!employeesState.dbSync) {
      getEmployees(businessesState.business.businessId);
    }
  }, [employeesState.dbSync]);

  // Set Modal State to create Employee
  const setModalToCreateEmployee = event => {
    event.stopPropagation();
    const modalStateData = 'create';
    showModal(modalStateData);
  };

  const confirmDeletionSubmit = e => {
    e.preventDefault();
    const employeeIdToDelete = employeesState.employee.personId;
    const { businessId } = businessesState.business;
    deleteEmployee(businessId, employeeIdToDelete);
    dispatch(() => hideModal());
  };

  const cancelSubmit = () => {
    dispatch(() => hideModal());
  };

  return (
    <>
      {modalReducerState.active && modalReducerState.action !== 'delete' && (
        <Modal>
          <FormEmployee />
        </Modal>
      )}
      {modalReducerState.active && modalReducerState.action === 'delete' && (
        <Modal>
          <FormConfirm cancelSubmit={cancelSubmit} submit={confirmDeletionSubmit} />
        </Modal>
      )}
      <MainTitle>{t('pages.employees.title')}</MainTitle>
      <EmployeeTableList employees={employees} createEmployee={setModalToCreateEmployee} />
    </>
  );
}

export default Employees;
