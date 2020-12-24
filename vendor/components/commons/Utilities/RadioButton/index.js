/* !!! CAUTIONS !!!
 **
 ** THIS INPUT ONLY ACCEPT 1 (ONE KIND OF TYPES) RADIO
 ** AND ONLY ACCEPT 6 (SIX KIND) OF PROPS
 ** EDIT THE CODE IF YOU WANT TO ADD PROPS
 */

import theme from './radiobutton.module.scss';
import PropTypes from 'prop-types';

const RadioButton = (props) => {
  const { id, name, label, value, onChange } = props;
  const styles = {
    'app__radio': theme['app__radio']
  };
  const handleChange = () => {
    onChange();
  };

  return (
    <>
      <div className={styles.app__radio}>
        <input type="radio" name={name} value={value} id={id} onChange={() => { handleChange }} />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  );
};

RadioButton.defaultProps = {
  id: null,
  name: null,
  type: 'radio',
  value: null,
  label: null,
  onClick: null
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};


export default RadioButton;