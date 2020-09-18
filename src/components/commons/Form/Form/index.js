/* !!! CAUTIONS !!!
 ** THIS COMPONENT ONLY ACCEPT 2 (TWO KIND OF PROPS)
 ** EDIT THIS CODE TO MODIFY
 */
import PropTypes from 'prop-types';
const Form = (props) => {
  const { children, onSubmit } = props;
  return (
    <>
      <form onSubmit={onSubmit}>{children}</form>
    </>
  );
};

Form.defaultProps = {
  children: null,
  onSubmit: null
};

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onSubmit: PropTypes.func
};

export default Form;
