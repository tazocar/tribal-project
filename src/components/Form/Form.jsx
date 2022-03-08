import styled from 'styled-components';
import styleVariables from '../../styles/variables';

const { spacing } = styleVariables;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing.md};
  height: 100%;
  justify-content: space-between;
`;
export const FormMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing.md};
`;
export const FormFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing.md};
`;
