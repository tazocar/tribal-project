import styled from 'styled-components';
import styleVariables from '../styles/variables';

const { screen, spacing } = styleVariables;

export const StyledLayout = styled.div`
  display: flex;
`;

export const Main = styled.main`
  padding: 100px ${spacing.md} ${spacing.md};
  display: flex;
  flex-direction: column;
  flex: auto;
  max-height: 100vh;
  overflow: scroll;
  @media (min-width: ${screen.md}) {
    display: initial;
  }
  @media (min-width: ${screen.sm}) {
    padding: ${spacing.md};
  }
`;
