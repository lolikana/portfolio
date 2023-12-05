import FieldWrapper from './FieldWrapper';
import styles from './SmartForm.module.scss';
import type { TTextArea } from './types';

const TextArea = ({ register, error, label, name, rows, cols, maxLength }: TTextArea) => {
	return (
		<FieldWrapper name={name} error={error} label={label}>
			<textarea
				className={styles.form_control}
				{...register}
				rows={rows}
				cols={cols}
				maxLength={maxLength}
			></textarea>
		</FieldWrapper>
	);
};

export default TextArea;
