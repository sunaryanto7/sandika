import theme from './form.module.scss';

const Form = (props) => {
    const { children, onSubmit } = props;
    return (
        <>
            <form onSubmit={onSubmit}>{children}</form>
        </>
    );
};

const FormRow = ({ children }) => {
    return (
        <>
            <div className={theme.form__row}>
                {children}
            </div>
        </>
    );
};

const FormGroup = ({ title, children }) => {
    return (
        <>
            <h4>{title}</h4>
            <div className={theme.form__group}>
                {children}
            </div>
        </>
    );
};

const InputGroup = (props) => {
    const { id, name, type, value, label, placeholder, onChange, onClick } = props;

    switch (type) {
        case 'text':
            return (
                <div>
                    {label && <label htmlFor={id}><span>{label}</span></label>}
                    <input
                        id={id}
                        name={name}
                        type={type}
                        onChange={onChange}
                        value={value}
                        placeholder={placeholder}
                    />
                </div>
            );
        case 'radio':
            return (
                <div>
                    <input
                        id={id}
                        name={name}
                        type={type}
                        onClick={onClick}
                        value={value}
                        placeholder={placeholder}
                    />
                    {label && <label htmlFor={id}>{label}</label>}
                </div>
            );
    }
};

export { Form, FormRow, FormGroup, InputGroup }