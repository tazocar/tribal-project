import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoGridSharp, IoMenuSharp } from 'react-icons/io5';

import { PrimaryButton, SubtleButton } from '../Button/Button';
import List from '../List/List';
import ListElement from '../List/ListElement/ListElement';
import BusinessCard from './BusinessCard/BusinessCard';
import { BusinessCTA, MainCTAButtonContainer } from './StyledBusinessTableList';

function BusinessTableList({ elements, createBusiness }) {
  const { t } = useTranslation();
  const [listDisplay, setListType] = useState('row');
  return (
    <>
      {/* Buttons to Change List Display */}
      <BusinessCTA>
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
          <PrimaryButton onClick={createBusiness}>{t('components.businessTableList.button')}</PrimaryButton>
        </MainCTAButtonContainer>
      </BusinessCTA>
      <List display={listDisplay}>
        {/* Map employees into ListElement */}
        {elements.map(element => (
          <ListElement key={element.businessId}>
            <BusinessCard business={element} display={listDisplay} />
          </ListElement>
        ))}
      </List>
    </>
  );
}
// Base types
const businessTypes = {
  businessId: PropTypes.string,
  name: PropTypes.string,
};
// Assing types
BusinessTableList.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      ...businessTypes,
    })
  ).isRequired,
  createBusiness: PropTypes.func.isRequired,
};

export default BusinessTableList;
