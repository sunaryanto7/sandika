import * as theme from './checkbox.module.scss';

const CheckBox = ({ label, value, name, id, onChange, checked, style }) => {
  const styles = {
    'app__checkbox': [theme['app__checkbox'], style].filter(Boolean).join(' '),
    'app__checkboxcheckmark': theme['app__checkboxcheckmark']
  };

  const handleChange = () => {
    onChange();
  };

  return (
    <>
      <div className={styles.app__checkbox}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          id={id}
          value={value}
          onChange={handleChange}
        />
        <span className={styles.app__checkboxcheckmark} onClick={handleChange} />
        <label htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
};

export default React.memo(CheckBox);