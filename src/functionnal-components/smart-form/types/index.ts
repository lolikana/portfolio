import type { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from 'react';
import type {
	FieldValues,
	SubmitHandler,
	UseFormProps,
	UseFormRegister,
} from 'react-hook-form';
import { type AnyZodObject } from 'zod';

export type TForm<TFieldValues extends FieldValues = FieldValues> = {
	onSubmnit: SubmitHandler<TFieldValues>;
	validationSchema: AnyZodObject;
	children: ReactNode;
	options?: UseFormProps<TFieldValues>;
};

export type TInput = {
	register?: UseFormRegister<FieldValues>;
	error?: string;
	name: string;
	label: string;
	type?: HTMLInputTypeAttribute;
};

export type TTextArea = Omit<TInput, 'type'> & {
	rows: number;
	cols: number;
	maxLength: number;
	onChange?: (e: ChangeEvent) => void;
};

export type TFieldWrapper = Omit<TInput, 'register' | 'type'> & {
	children: ReactNode;
};
