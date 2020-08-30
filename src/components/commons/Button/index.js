import PropTypes from 'prop-types';
import theme from './button.module.scss';

const Button = ({ children, fullWidth, btnDanger, onCLick }) => {
    var className = [
        theme.btn,
        fullWidth ? theme.btnFullWidth : null,
        btnDanger ? theme.btnDanger : null
    ];
    return (
        <>
            <button className={className.join(' ')} onCLick={() => { onCLick }}>{children}</button>
        </>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    fullWidth: PropTypes.bool,
    btnDanger: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;
