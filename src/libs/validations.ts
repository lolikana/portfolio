import { z } from 'zod';

export const contactFormValidation = z.object({
	from_name: z
		.string({
			required_error: 'Name is required',
			invalid_type_error: 'Name must be a string'
		})
		.min(1, 'Name is required'),
	from_email: z
		.string({
			required_error: 'Email is required',
			invalid_type_error: 'Email must be a string'
		})
		.email({ message: 'Wrong email format' }),
	message: z
		.string({
			required_error: 'Message is required'
		})
		.min(1, 'Message is required')
});
