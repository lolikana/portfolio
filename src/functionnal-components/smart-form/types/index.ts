import type { HTMLInputTypeAttribute, ReactNode } from 'react';
import type {
	FieldValues,
	SubmitHandler,
	UseFormProps,
	UseFormRegister
} from 'react-hook-form';
import { type AnyZodObject } from 'zod';

export type TForm<TFormvalues extends FieldValues> = {
	onSubmnit: SubmitHandler<TFormvalues>;
	validationSchema: AnyZodObject;
	children: ReactNode;
	options?: UseFormProps<TFormvalues>;
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
};

export type TFieldWrapper = Omit<TInput, 'register' | 'type'> & {
	children: ReactNode;
};
