import styled from 'styled-components';
import PropTypes from 'prop-types';
import styleVariables from '../../styles/variables';

const { screen, spacing } = styleVariables;
const List = styled.ul`
  gap: ${spacing.xs};
  margin-top: ${spacing.md};
  display: grid;
  grid-template-columns: ${({ display }) =>
    display === 'card' ? 'repeat(auto-fill, 325px)' : 'repeat(auto-fill, 100%)'};
  justify-content: ${({ display }) => (display === 'card' ? 'space-between' : 'initial')};
  li {
    border: ${({ theme, display }) => (display === 'card' ? `1px solid ${theme.bgHighlight}` : 'none')};
    :nth-child(even) {
      background-color: rgba(0, 0, 0, 0.05);
    }

    :hover {
      background-color: rgba(0, 0, 0, 0.1);
      border: ${({ display }) => (display === 'card' ? '1px solid rgba(0, 0, 0, 0.1)' : 'none')};
      box-shadow: ${({ theme }) => theme.shadow};
    }
  }
  @media (max-width: ${screen.md}) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
  @media (min-width: ${screen.md}) {
    max-width: calc(100vw - 340px);
  }
`;

// Types allowed to control the list display
List.propTypes = {
  display: PropTypes.oneOf(['card', 'row']).isRequired,
};
export default List;
