import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoGridSharp, IoMenuSharp } from 'react-icons/io5';

import { PrimaryButton, SubtleButton } from '../Button/Button';
import List from '../List/List';
import ListElement from '../List/ListElement/ListElement';
import EmployeeCard from './EmployeeCard/EmployeeCard';
import { EmployeeCTA, MainCTAButtonContainer } from './StyledEmployeeTableList';

function EmployeeTableList({ employees, createEmployee }) {
  const { t } = useTranslation();
  const [listDisplay, setListType] = useState('row');
  return (
    <>
      {/* Buttons to Change List Display */}
      <EmployeeCTA>
        {listDisplay === 'row' && (
          <SubtleButton
            onClick={() => {
              setListType('card');
            }}
          >
            <IoGridSharp />
          </SubtleButton>
        )}
        {listDisplay === 'card' && (
          <SubtleButton
            onClick={() => {
              setListType('row');
            }}
          >
            <IoMenuSharp />
          </SubtleButton>
        )}
        <MainCTAButtonContainer>
          <PrimaryButton onClick={createEmployee}>{t('components.employeeTableList.button')}</PrimaryButton>
        </MainCTAButtonContainer>
      </EmployeeCTA>
      {/* Map employees into ListElement */}
      <List display={listDisplay}>
        {employees.map(employee => (
          <ListElement key={employee.personId}>
            <EmployeeCard display={listDisplay} employee={employee} />
          </ListElement>
        ))}
      </List>
    </>
  );
}

// Base types
const employeeTypes = {
  personId: PropTypes.string,
  name: PropTypes.string,
};
// Assing types
EmployeeTableList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      ...employeeTypes,
    })
  ).isRequired,
  createEmployee: PropTypes.func.isRequired,
};

export default EmployeeTableList;
