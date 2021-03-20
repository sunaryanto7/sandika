/* !!! CAUTIONS !!!
 **
 ** THIS INPUT ONLY ACCEPT 5 (THREE KIND OF TYPES) NUMBER, PASSWORD, EMAIL, TEXT, HIDDEN
 ** AND ONLY ACCEPT 7 (SEVEN KIND) OF PROPS
 ** EDIT THE CODE IF YOU WANT TO ADD PROPS
 */

import theme from './inputfield.module.scss';
import PropTypes from 'prop-types';

const InputField = ({ label, value, error, id, name, type, readOnly, placeholder, onChange }) => {
  const styles = {
    app__input: theme['app__input'],
    app__errormessage: theme['app__errormessage']
  };

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

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
        readOnly={readOnly}
        onChange={(e) => handleChange(e)}
        value={value}
        placeholder={placeholder}
        className={styles.app__input}
      />
      {error && <span className={styles.app__errormessage}>{error}</span>}
    </>
  );
};

InputField.defaultProps = {
  id: null,
  name: null,
  type: null,
  value: undefined,
  label: null,
  readOnly: false,
  placeholder: null,
  onChange: undefined,
  error: null
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'hidden', 'password', 'email']).isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default React.memo(InputField);
