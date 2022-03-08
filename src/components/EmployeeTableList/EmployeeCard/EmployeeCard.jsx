import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IoTrashSharp, IoPencilSharp } from 'react-icons/io5';

// Redux Actions
import { showModalAction } from '../../../redux/actions/modalActions';
import { selectedEmployeeAction } from '../../../redux/actions/employeeActions';

import { SubtleButton } from '../../Button/Button';
import {
  StyledEmployeeCard,
  CardFooter,
  CardCTA,
  CardBasicInfo,
  CardHeader,
  CardBasicInfoTitle,
  CardInfoNormal,
  CardInfoSubtle,
  CardHr,
} from './StyledEmployeeCard';

function EmployeeCard({ employee, display }) {
  const dispatch = useDispatch();
  const showModal = modalState => dispatch(showModalAction(modalState));
  const selectedEmployee = employeeID => dispatch(selectedEmployeeAction(employeeID));

  // Sett Employee to be edited
  const handleEditEmployee = event => {
    event.stopPropagation();
    // Set modal state with the action type we're doing
    const modalStateData = 'edit';
    showModal(modalStateData);
    // Set State with Employee to work with
    selectedEmployee(employee);
  };

  const handleDeleteEmployee = event => {
    event.stopPropagation();
    // Set modal state with the action type we're doing
    const modalStateData = 'delete';
    showModal(modalStateData);
    // Set State with Employee to work with
    selectedEmployee(employee);
  };

  return (
    <StyledEmployeeCard>
      <CardHeader>
        <CardBasicInfo>
          <CardBasicInfoTitle>{employee.name}</CardBasicInfoTitle>
          <CardInfoSubtle>{employee.role}</CardInfoSubtle>
        </CardBasicInfo>
        <CardCTA>
          <SubtleButton onClick={handleEditEmployee} type="button" color="warning" size="xs">
            <IoPencilSharp />
          </SubtleButton>
          <SubtleButton onClick={handleDeleteEmployee} type="button" color="danger" size="xs">
            <IoTrashSharp />
          </SubtleButton>
        </CardCTA>
      </CardHeader>
      {display === 'card' && (
        <>
          <CardHr />
          <CardFooter>
            <CardInfoNormal>{employee.phone}</CardInfoNormal>
            <CardInfoNormal>{employee.email}</CardInfoNormal>
          </CardFooter>
        </>
      )}
    </StyledEmployeeCard>
  );
}

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  display: PropTypes.string.isRequired,
};

export default EmployeeCard;
