import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleVariables from '../../styles/variables';

const { text, spacing, borderRadius } = styleVariables;

const BaseButton = styled.button`
  cursor: pointer;
  border: ${({ theme, color }) => `2px solid ${theme.colors[color]}`};
  border-radius: ${borderRadius.sm};
  padding: ${({ size }) => `${spacing[size]} calc(${spacing[size]} * 2)`};
  font-size: ${text.sm};
  color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  transition: all ease 0.3s;
  order: ${({ order }) => order};
`;

export const PrimaryButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, color }) => theme.colors[color]};
  :hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.bg};
  :hover {
    background-color: ${({ theme, color }) => theme.colors[color]};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SubtleButton = styled(BaseButton)`
  border: none;
  background-color: transparent;
  :hover {
    background-color: ${({ theme, color }) => theme.colors[color]};
    color: ${({ theme }) => theme.colors.white};
  }
`;

// Base types
const types = {
  color: PropTypes.oneOf(['primary', 'danger', 'warning', 'success']),
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  order: PropTypes.number,
};
// Default types
const defaultTypes = {
  color: 'primary',
  size: 'sm',
  order: 1,
};

// Assign Types
PrimaryButton.defaultProps = defaultTypes;
PrimaryButton.propTypes = types;
SecondaryButton.defaultProps = defaultTypes;
SecondaryButton.propTypes = types;
SubtleButton.defaultProps = defaultTypes;
SubtleButton.propTypes = types;
