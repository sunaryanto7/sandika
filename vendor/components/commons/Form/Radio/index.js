/* !!! CAUTIONS !!!
 **
 ** THIS INPUT ONLY ACCEPT 1 (ONE KIND OF TYPES) RADIO
 ** AND ONLY ACCEPT 6 (SIX KIND) OF PROPS
 ** EDIT THE CODE IF YOU WANT TO ADD PROPS
 */

import theme from './radio.module.scss';
import PropTypes from 'prop-types';

const Radio = (props) => {

  const { id, name, label, other = { ...props } } = props;
  const styles = {
    'form__radio': theme['form__radio']
  };

  return (
    <>
      <input
        id={id}
        name={name}
        type='radio'
        className={styles.form__radio}
        {...other}
      />
      {label && (
        <label htmlFor={id}>
          <span>{label}</span>
        </label>
      )}
    </>
  );
};

Radio.defaultProps = {
  id: null,
  name: null,
  type: null,
  value: null,
  label: null,
  onClick: null
};

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['radio']).isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Radio;
