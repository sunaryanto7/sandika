import theme from './checkbox.module.scss';

const Checkbox = ({ value, name, id, onChange, children, style }) => {
	const styles = {
		'form__checkbox': theme['form__checkbox'],
		'form__checkbox_checkmark': theme['form__checkbox_checkmark']
	};

	return (
		<>
			<label className={styles.form__checkbox}>
				<input
					type="checkbox"
					name={name}
					id={id}
					value={value}
					onChange={() => { onChange }} />
				<span className={styles.form__checkbox_checkmark}>
					{children}
				</span>
			</label>
		</>
	);
};

export default Checkbox;