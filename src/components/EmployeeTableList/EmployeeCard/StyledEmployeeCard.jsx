import styled from 'styled-components';
import styleVariables from '../../../styles/variables';

const { text, spacing } = styleVariables;

export const StyledEmployeeCard = styled.div`
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
export const CardBasicInfo = styled.div``;

export const CardBasicInfoTitle = styled.span`
  font-weight: bold;
  display: block;
  line-height: 1rem;
`;
export const CardInfoSubtle = styled.span`
  font-size: ${text.xs};
  text-transform: uppercase;
`;
export const CardInfoNormal = styled.span`
  font-size: ${text.xs};
  display: block;
  line-height: 1rem;
`;
export const CardHr = styled.hr`
  margin: ${spacing.sm} 0;
`;
