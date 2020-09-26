import PropTypes from 'prop-types';
import './button.module.scss';

const Button = ({ children, fullWidth, btnDanger, btnWhite, btnTransparent, onClick, style }) => {
  var classNames = [
    'button',
    fullWidth ? 'button__full_width' : null,
    btnDanger ? 'button__danger' : null,
    btnWhite ? 'button__white' : null,
    btnTransparent ? 'button__transparent' : null,
    style
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <button className={classNames} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  btnDanger: PropTypes.bool,
  btnWhite: PropTypes.bool,
  btnTransparent: PropTypes.bool
};

export default Button;
