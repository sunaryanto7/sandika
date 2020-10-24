import PropTypes from 'prop-types';
import theme from './formrow.module.scss';

const FormRow = ({ children }) => {
  const styles = {
    'form__row': theme['form__row']
  };
  return (
    <>
      <div className={styles.form__row}>{children}</div>
    </>
  );
};

FormRow.defaultProps = {
  children: null
};

FormRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default FormRow;
