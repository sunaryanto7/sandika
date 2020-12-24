/* !!! COUTIONS !!!
 ** THIS COMPONET USED TO WRAP FORM TAG eg: INPUT, SELECT, TEXTAREA, etc
 */

import PropTypes from 'prop-types';
import theme from './formgroup.module.scss';

const FormGroup = ({ children }) => {
  const styles = {
    form__group: theme['form__group']
  };
  return (
    <>
      <div className={styles.form__group}>{children}</div>
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
