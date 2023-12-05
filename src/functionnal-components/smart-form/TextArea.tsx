import { type ChangeEvent, useState } from 'react';

import FieldWrapper from './FieldWrapper';
import styles from './SmartForm.module.scss';
import type { TTextArea } from './types';

const TextArea = ({ register, error, label, name, rows, cols, maxLength }: TTextArea) => {
	const [maxCount, setMaxCount] = useState(0);
	const handleCHange = (event: ChangeEvent) => {
		const target = event.target as HTMLTextAreaElement;
		setMaxCount(target.value.length);
	};

	return (
		<FieldWrapper name={name} error={error} label={label}>
			<textarea
				className={styles.form_control}
				{...register}
				rows={rows}
				cols={cols}
				maxLength={maxLength}
				onChange={handleCHange}
			></textarea>
			<div className={styles['count-container']}>
				<span className={styles['count-characters']}>{maxCount}</span>
				<span>/</span>
				<span className={styles['max-characters']}>{maxLength}</span>
			</div>
		</FieldWrapper>
	);
};

export default TextArea;
