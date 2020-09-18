/* !!! COUTIONS !!!
 ** THIS COMPONET USED TO WRAP FORM TAG eg: INPUT, SELECT, TEXTAREA, etc
 */

import PropTypes from 'prop-types';
import theme from './formgroup.module.scss';

const FormGroup = ({ title, children }) => {
  return (
    <>
      <h4>{title}</h4>
      <div className={theme.form__group}>{children}</div>
    </>
  );
};

FormGroup.defaultProps = {
  title: null,
  children: null
};

FormGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default FormGroup;
