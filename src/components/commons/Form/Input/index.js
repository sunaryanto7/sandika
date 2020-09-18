/* !!! CAUTIONS !!!
 **
 ** THIS INPUT ONLY ACCEPT 5 (THREE KIND OF TYPES) NUMBER, PASSWORD, EMAIL, TEXT, HIDDEN
 ** AND ONLY ACCEPT 7 (SEVEN KIND) OF PROPS
 ** EDIT THE CODE IF YOU WANT TO ADD PROPS
 */

import theme from './input.module.scss';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { id, name, type, value, label, placeholder, onChange } = props;

  return (
    <>
      {label && (
        <label htmlFor={id}>
          <span>{label}</span>
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={theme.form__input}
      />
    </>
  );
};

Input.defaultProps = {
  id: null,
  name: null,
  type: null,
  value: undefined,
  label: null,
  placeholder: null,
  onChange: undefined
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'hidden', 'password', 'email']).isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
