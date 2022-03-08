import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { PrimaryButton, SecondaryButton } from '../Button/Button';
import { Form, FormFooter, FormMain } from '../Form/Form';
import { SecondaryTitle } from '../Heading/StyledHeading';

function FormConfirm({ cancelSubmit, submit }) {
  const { t } = useTranslation();
  return (
    <Form onSubmit={submit}>
      <FormMain>
        <SecondaryTitle>{t('components.formConfirm.title')}</SecondaryTitle>
        <p>{t('components.formConfirm.paragraph')}</p>
      </FormMain>
      <FormFooter>
        <PrimaryButton type="submit" color="danger">
          {t('components.formConfirm.buttons.confirm')}
        </PrimaryButton>
        <SecondaryButton onClick={cancelSubmit} type="button">
          {t('components.formConfirm.buttons.cancel')}
        </SecondaryButton>
      </FormFooter>
    </Form>
  );
}

FormConfirm.propTypes = {
  cancelSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default FormConfirm;
