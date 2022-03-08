import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux Actions
import { hideModalAction, showModalAction } from '../../redux/actions/modalActions';
import { getBusinessesAction, deleteBusinessAction } from '../../redux/actions/businessActions';

import { MainTitle } from '../../components/Heading/StyledHeading';
import BussinessesTableList from '../../components/BusinessTableList/BusinessTableList';
import Modal from '../../components/Modal/Modal';
import FormConfirm from '../../components/FormConfirm/FormConfirm';
import FormBusiness from '../../components/FormBusiness/FormBusiness';
import { deleteEmployeeAction, getEmployeesAction } from '../../redux/actions/employeeActions';

function Businesses() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const hideModal = () => dispatch(hideModalAction());
  const showModal = modalState => dispatch(showModalAction(modalState));
  const getBusinesses = () => dispatch(getBusinessesAction());
  const deleteBusiness = businessID => dispatch(deleteBusinessAction(businessID));
  const getEmployees = businessID => dispatch(getEmployeesAction(businessID));
  const deleteEmployee = (businessId, employeeId) => dispatch(deleteEmployeeAction(businessId, employeeId));
  const modalReducerState = useSelector(state => state.modal);
  const businessesState = useSelector(state => state.business);
  const employeesState = useSelector(state => state.employee);

  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    getBusinesses();
  }, []);

  // Check for changes on Businesses State
  useEffect(() => {
    setBusinesses(businessesState.businesses);
  }, [businessesState.businesses]);

  // Check for sync with BD after modifying Business if not, update State
  useEffect(() => {
    if (!businessesState.dbSync) {
      getBusinesses();
    }
  }, [businessesState.dbSync]);

  // Set Modal to create business
  const setModalToCreateBusiness = event => {
    event.stopPropagation();
    const modalStateData = 'create';
    showModal(modalStateData);
  };

  const deleteAsociatedEmployees = () => {
    const businessId = businessesState.editID;
    getEmployees(businessId);
    employeesState.employees.map(employee => {
      return deleteEmployee(businessId, employee.personId);
    });
  };

  const confirmDeletionSubmit = e => {
    e.preventDefault();
    const businessIdToDelete = businessesState.business.businessId;
    deleteAsociatedEmployees();
    deleteBusiness(businessIdToDelete);
    dispatch(() => hideModal());
  };

  const cancelSubmit = () => {
    dispatch(() => hideModal());
  };

  return (
    <>
      {modalReducerState.active && modalReducerState.action !== 'delete' && (
        <Modal>
          <FormBusiness />
        </Modal>
      )}
      {modalReducerState.active && modalReducerState.action === 'delete' && (
        <Modal>
          <FormConfirm cancelSubmit={cancelSubmit} submit={confirmDeletionSubmit} />
        </Modal>
      )}
      <MainTitle>{t('pages.business.title')}</MainTitle>
      <BussinessesTableList elements={businesses} createBusiness={setModalToCreateBusiness} />
    </>
  );
}

export default Businesses;
