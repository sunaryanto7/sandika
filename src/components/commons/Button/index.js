import PropTypes from 'prop-types';
import theme from './button.module.scss';

const Button = ({ label, fullWidth, btnDanger }) => {
    var className = [
        theme.btn,
        fullWidth ? theme.btnFullWidth : null,
        btnDanger ? theme.btnDanger : null
    ];
    return (
        <>
            <button className={className.join(' ')}>{label}</button>
        </>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    fullWidth: PropTypes.bool,
    btnDanger: PropTypes.bool
};

export default Button;
