import styled from 'styled-components';
import styleVariables from '../../../styles/variables';

const { spacing, borderRadius } = styleVariables;

const StyledListElement = styled.li`
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.md};
  border-radius: ${borderRadius.sm};
  gap: ${spacing.md};
`;

export default StyledListElement;
