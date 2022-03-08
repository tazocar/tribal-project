import styled from 'styled-components';
import styleVariables from '../../../styles/variables';

const { spacing } = styleVariables;

export const StyledBusinessCard = styled.div`
  width: 100%;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const CardFooter = styled.footer``;

export const CardCTA = styled.div`
  margin-left: ${spacing.md};
`;
export const CardBasicInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CardBasicInfoTitle = styled.span`
  font-weight: bold;
`;
