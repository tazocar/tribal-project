import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoTrashSharp, IoPencilSharp } from 'react-icons/io5';

// Redux Actions
import { showModalAction } from '../../../redux/actions/modalActions';
import { selectedBussinesAction } from '../../../redux/actions/businessActions';

import { SubtleButton } from '../../Button/Button';
import { StyledBusinessCard, CardCTA, CardBasicInfo, CardHeader, CardBasicInfoTitle } from './StyledBusinessCard';

function BusinessCard({ business }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showModal = modalState => dispatch(showModalAction(modalState));
  const selectedBussines = businessID => dispatch(selectedBussinesAction(businessID));

  const handleEditBusiness = event => {
    event.stopPropagation();
    // Set modal state with the action type we're doing
    const modalStateData = 'edit';
    showModal(modalStateData);
    // Set State with Bussiness to work with
    selectedBussines(business);
  };

  const handleDeleteBusiness = event => {
    event.stopPropagation();
    // Set modal state with the action type we're doing
    const modalStateData = 'delete';
    showModal(modalStateData);
    // Set State with Bussiness to work with
    selectedBussines(business);
  };

  const handleSelectedBusiness = () => {
    // Set State with Bussiness to work with
    selectedBussines(business);
    // Navigate to the employee screen of this businessID
    return navigate(`/business/${business.businessId}`);
  };

  return (
    <StyledBusinessCard onClick={handleSelectedBusiness}>
      <CardHeader>
        <CardBasicInfo>
          <CardBasicInfoTitle>{business.name}</CardBasicInfoTitle>
        </CardBasicInfo>
        <CardCTA>
          <SubtleButton onClick={handleEditBusiness} type="button" color="warning" size="xs">
            <IoPencilSharp />
          </SubtleButton>
          <SubtleButton onClick={handleDeleteBusiness} type="button" color="danger" size="xs">
            <IoTrashSharp />
          </SubtleButton>
        </CardCTA>
      </CardHeader>
    </StyledBusinessCard>
  );
}

BusinessCard.propTypes = {
  business: PropTypes.shape({
    businessId: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default BusinessCard;
