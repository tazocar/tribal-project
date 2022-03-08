import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import { hideModalAction } from '../../redux/actions/modalActions';
import { createBusinessAction, editBusinessAction } from '../../redux/actions/businessActions';

import { PrimaryButton, SecondaryButton } from '../Button/Button';
import { Form, FormFooter, FormMain } from '../Form/Form';
import InputField from '../Form/InputField/InputField';
import { SecondaryTitle } from '../Heading/StyledHeading';
import Error from '../Error/Error';

function FormBusiness() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const hideModal = () => dispatch(hideModalAction());
  const createBusiness = business => dispatch(createBusinessAction(business));
  const editBusiness = (businessID, business) => dispatch(editBusinessAction(businessID, business));
  const businessReducerState = useSelector(state => state.business);
  const modalActionType = useSelector(state => state.modal.action);

  const [error, setError] = useState(false);
  const [business, setBusiness] = useState({
    name: '',
  });

  // Check if we are editing to rescue the original values
  useEffect(() => {
    if (modalActionType === 'edit') {
      const {
        business: { name },
      } = businessReducerState;
      setBusiness({ name });
    }
  }, []);

  const setValue = e => {
    // Set business value for every input field
    setBusiness({
      ...business,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    // validate form
    if (business.name === '') return setError(true);

    // set formAction with the action asked in reducer
    if (modalActionType === 'create') dispatch(() => createBusiness(business));
    else if (modalActionType === 'edit') {
      const {
        business: { businessId },
      } = businessReducerState;
      dispatch(() => editBusiness(businessId, business));
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
      <FormMain>
        {error && <Error>{t('components.formBusiness.error')}</Error>}
        <SecondaryTitle>{t(`components.formBusiness.titles.${modalActionType}`)}</SecondaryTitle>
        <InputField
          label={t('components.formBusiness.labels.name')}
          name="name"
          type="text"
          value={business.name}
          setValue={setValue}
        />
      </FormMain>
      <FormFooter>
        <PrimaryButton type="submit">{t(`components.formBusiness.buttons.${modalActionType}`)}</PrimaryButton>
        <SecondaryButton type="button" color="danger" onClick={handleCancel}>
          {t('components.formEmployee.buttons.cancel')}
        </SecondaryButton>
      </FormFooter>
    </Form>
  );
}

export default FormBusiness;
