import styled from 'styled-components';
import styleVariables from '../../../styles/variables';

const { spacing } = styleVariables;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  padding: ${spacing.sm};
  margin-top: ${spacing.xs};
`;
