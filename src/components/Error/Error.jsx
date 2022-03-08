import styled from 'styled-components';
import styleVariables from '../../styles/variables';

const { colors, spacing, text, borderRadius } = styleVariables;

const Error = styled.div`
  background-color: ${colors.danger};
  color: ${colors.white};
  border-radius: ${borderRadius.sm};
  padding: ${spacing.sm};
  font-size: ${text.sm};
`;

export default Error;
