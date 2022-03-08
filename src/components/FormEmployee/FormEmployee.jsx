import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import { hideModalAction } from '../../redux/actions/modalActions';
import { createEmployeeAction, editEmployeeAction } from '../../redux/actions/employeeActions';

import { PrimaryButton, SecondaryButton } from '../Button/Button';
import { Form, FormFooter, FormMain } from '../Form/Form';
import InputField from '../Form/InputField/InputField';
import Error from '../Error/Error';
import { SecondaryTitle } from '../Heading/StyledHeading';

function FormEmployee() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const hideModal = () => dispatch(hideModalAction());
  const createEmployee = (businessId, employee) => dispatch(createEmployeeAction(businessId, employee));
  const editEmployee = (businessId, employeeId, employee) =>
    dispatch(editEmployeeAction(businessId, employeeId, employee));
  const employeeReducerState = useSelector(state => state.employee);
  const businessReusducerState = useSelector(state => state.business);
  const modalActionType = useSelector(state => state.modal.action);

  const [error, setError] = useState(false);
  const [employee, setEmployee] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    join_date: '',
  });

  // Check if we are editing to rescue the original values
  useEffect(() => {
    if (modalActionType === 'edit') {
      const {
        // eslint-disable-next-line camelcase
        employee: { name, role, email, phone, join_date },
      } = employeeReducerState;
      // eslint-disable-next-line camelcase
      setEmployee({ name, role, email, phone, join_date });
    }
  }, []);

  const setValue = e => {
    setEmployee({
      ...employee,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    // validate form
    if (Object.values(employee).includes('')) return setError(true);

    const { businessId } = businessReusducerState.business;
    // set formAction with the action asked in reducer
    if (modalActionType === 'create') dispatch(() => createEmployee(businessId, employee));
    else if (modalActionType === 'edit') {
      const employeeId = employeeReducerState.employee.personId;
      dispatch(() => editEmployee(businessId, employeeId, employee));
    }
    setError(false);
    return dispatch(() => hideModal());
  };

  const handleCancel = e => {
    e.preventDefault();
    dispatch(() => hideModal());
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      {/* InputField labels rendered from translation file */}
      <FormMain>
        {error && <Error>{t('components.formEmployee.error')}</Error>}
        <SecondaryTitle>{t(`components.formEmployee.titles.${modalActionType}`)}</SecondaryTitle>
        <InputField
          label={t('components.formEmployee.labels.name')}
          name="name"
          type="text"
          value={employee.name}
          setValue={setValue}
        />
        <InputField
          label={t('components.formEmployee.labels.role')}
          name="role"
          type="text"
          value={employee.role}
          setValue={setValue}
        />
        <InputField
          label={t('components.formEmployee.labels.email')}
          name="email"
          type="email"
          value={employee.email}
          setValue={setValue}
        />
        <InputField
          label={t('components.formEmployee.labels.phone')}
          name="phone"
          type="phone"
          value={employee.phone}
          setValue={setValue}
        />
        <InputField
          label={t('components.formEmployee.labels.joinDate')}
          name="join_date"
          type="date"
          value={employee.join_date}
          setValue={setValue}
        />
      </FormMain>
      <FormFooter>
        <PrimaryButton type="submit">{t(`components.formEmployee.buttons.${modalActionType}`)}</PrimaryButton>
        <SecondaryButton type="button" color="danger" onClick={handleCancel}>
          {t('components.formEmployee.buttons.cancel')}
        </SecondaryButton>
      </FormFooter>
    </Form>
  );
}

export default FormEmployee;
