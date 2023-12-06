import FieldWrapper from './FieldWrapper';
import type { TInput } from './types';

const Input = ({ register, error, name, label, type }: TInput) => {
	return (
		<FieldWrapper error={error} name={name} label={label}>
			<input {...register} id={name} name={name} type={type} />
		</FieldWrapper>
	);
};

export default Input;
