import styled from 'styled-components';
import styleVariables from '../../styles/variables';

const { screen, spacing } = styleVariables;

export const EmployeeCTA = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.md};
`;

export const MainCTAButtonContainer = styled.div`
  @media (max-width: ${screen.sm}) {
    position: absolute;
    width: calc(100% - 2rem);
    bottom: 1rem;
    left: 1rem;
    & > button {
      width: 100%;
    }
  }
`;
