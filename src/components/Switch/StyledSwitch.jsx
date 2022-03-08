import styled from 'styled-components';
import PropTypes from 'prop-types';
import styleVariables from '../../styles/variables';

const { colors } = styleVariables;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const StyledSwitch = styled.button`
  margin: 0 auto;
  cursor: pointer;
  width: 42px;
  height: 20px;
  border: none;
  border-radius: 16px;
  background: ${({ theme, isActive }) => (!isActive ? colors.gray : theme.colors.primary)};
  position: relative;
`;

export const SwitchThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  transition: 0.2s ease right;
  right: ${({ isActive }) => (isActive ? '1px' : 'calc(100% - 18px - 1px)')};
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;

StyledSwitch.propTypes = {
  isActive: PropTypes.bool,
};
SwitchThumb.propTypes = {
  isActive: PropTypes.bool,
};
