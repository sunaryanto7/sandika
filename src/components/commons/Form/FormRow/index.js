import PropTypes from 'prop-types';
import './formrow.module.scss';

const FormRow = ({ children }) => {
  return (
    <>
      <div className={theme.form__row}>{children}</div>
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
