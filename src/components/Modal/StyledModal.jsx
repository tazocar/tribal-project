import styled from 'styled-components';
import styleVariables from '../../styles/variables';

const { screen, spacing, borderRadius } = styleVariables;

export const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: ${spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  @media (min-width: ${screen.md}) {
    height: auto;
    border-radius: ${borderRadius.sm};
    width: 400px;
    position: absolute;
    left: 50%;
    top: 10rem;
    transform: translate(-50%, 0);
  } ;
`;
