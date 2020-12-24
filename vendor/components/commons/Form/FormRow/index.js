import PropTypes from 'prop-types';
import theme from './formrow.module.scss';

const FormRow = ({ title, children, style }) => {
  const styles = {
    form__row: [theme['form__row'], style].filter(Boolean).join(' ')
  };
  return (
    <>
      <div className={styles.form__row}>
        {title && <h3>{title}</h3>}
        {children}
      </div>
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
