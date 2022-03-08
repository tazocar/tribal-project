import PropTypes from 'prop-types';
import { Input, Label } from './StyledInputField';

function InputField({ label, name, type, value, setValue }) {
  return (
    <Label htmlFor={name}>
      {label}
      <Input type={type} id={name} value={value} onChange={setValue} />
    </Label>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default InputField;
