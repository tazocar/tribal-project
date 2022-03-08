import PropTypes from 'prop-types';
import { ModalContainer, StyledModal } from './StyledModal';

function Modal({ children }) {
  return (
    <StyledModal>
      <ModalContainer>{children}</ModalContainer>
    </StyledModal>
  );
}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Modal;
