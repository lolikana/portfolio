import styles from './SmartForm.module.scss';
import type { TFieldWrapper } from './types';

const FieldWrapper = (props: TFieldWrapper) => {
	const { name, label, error, children } = props;
	return (
		<div className={styles['smart-form__group']}>
			<div className={styles['smart-form__input']}>
				<label htmlFor={name}>{label}</label>
				{children}
			</div>
			{error && <p className={styles.text_red}>{error}</p>}
		</div>
	);
};

export default FieldWrapper;
