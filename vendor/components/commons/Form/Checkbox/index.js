import theme from './checkbox.module.scss';

const Checkbox = ({ value, name, id, onChange, children, checked, style }) => {
  const styles = {
    form__checkbox: [theme['form__checkbox'], style].filter(Boolean).join(' '),
    form__checkbox_checkmark: theme['form__checkbox_checkmark']
  };

  console.log;
  return (
    <>
      <label className={styles.form__checkbox}>
        {children}
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          value={value}
          onChange={() => {
            onChange();
          }}
        />
        <span className={styles.form__checkbox_checkmark} />
      </label>
    </>
  );
};

export default Checkbox;
