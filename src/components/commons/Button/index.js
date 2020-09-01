import PropTypes from 'prop-types';
import theme from './button.module.scss';

const Button = ({ children, fullWidth, btnDanger, btnWhite, btnTransparent, onClick }) => {
    var className = [
        theme.btn,
        fullWidth ? theme.btnFullWidth : null,
        btnDanger ? theme.btnDanger : null,
        btnWhite ? theme.btnWhite : null,
        btnTransparent ? theme.btnTransparent : null
    ];
    return (
        <>
            <button className={className.join(' ')} onClick={onClick}>
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
