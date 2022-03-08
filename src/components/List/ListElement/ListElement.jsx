import PropTypes from 'prop-types';
import StyledListElement from './StyledListElement';

function ListElement({ children }) {
  return <StyledListElement>{children}</StyledListElement>;
}

ListElement.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ListElement;
