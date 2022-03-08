import PropTypes from 'prop-types';
import { SwitchContainer, StyledSwitch, SwitchThumb } from './StyledSwitch';

function Switch({ isActive, handleSwitch }) {
  return (
    <SwitchContainer>
      <StyledSwitch isActive={isActive} onClick={handleSwitch}>
        <SwitchThumb isActive={isActive} />
      </StyledSwitch>
    </SwitchContainer>
  );
}
Switch.defaultProps = {
  isActive: false,
};
Switch.propTypes = {
  isActive: PropTypes.bool,
  handleSwitch: PropTypes.func.isRequired,
};

export default Switch;
