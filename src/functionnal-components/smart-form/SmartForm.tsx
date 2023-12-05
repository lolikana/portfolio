import { zodResolver } from '@hookform/resolvers/zod';
import { createElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import styles from './SmartForm.module.scss';
import type { TForm } from './types';

const SmartForm = <
	TFormValues extends Record<string, unknown> = Record<string, unknown>
>({
		onSubmnit,
		validationSchema,
		children,
		options
	}: TForm<TFormValues>) => {
	const resolver = zodResolver(validationSchema);
	const methods = useForm<TFormValues>({ ...options, resolver });
	const {
		handleSubmit,
		register,
		reset,
		resetField,
		formState: { errors, isSubmitSuccessful }
	} = methods;

	useEffect(() => {
		if (!isSubmitSuccessful) return;
		reset();
	}, [isSubmitSuccessful, reset]);

	return (
		<form onSubmit={handleSubmit(onSubmnit)}>
			<div className={styles['smart-form']}>
				{Array.isArray(children)
					? children.map(child => {
						return child.props.name
							? createElement(child.type, {
								...{
									...child.props,
									register: { ...register(child.props.name) },
									error: errors[child.props.name]?.message,
									resetField,
									key: child.props.name
								}
								  })
							: child;
					  })
					: children}
			</div>
			<div></div>
		</form>
	);
};

export default SmartForm;
