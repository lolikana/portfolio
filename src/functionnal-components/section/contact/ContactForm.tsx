import emailjs from '@emailjs/browser';
import Input from '@functionnal-components/smart-form/Input';
import SmartForm from '@functionnal-components/smart-form/SmartForm';
import TextArea from '@functionnal-components/smart-form/TextArea';
import type { TContact } from '@libs/types';
import { contactFormValidation } from '@libs/validations';
import { type FC, useState } from 'react';

import styles from './ContactForm.module.scss';

type Props = {
	slotSubmitButton: boolean;
};

const ContactSection: FC<Props> = props => {
	const [isOpen, setIsOpen] = useState(false);
	const { slotSubmitButton } = props;
	const sendEmail = (message: TContact) => {
		emailjs
			.send(
				import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
				import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
				message,
				import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(
				result => {
					console.log(result.text);
					setIsOpen(true);
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<SmartForm<TContact>
				validationSchema={contactFormValidation}
				options={{}}
				onSubmnit={sendEmail}
			>
				<Input name="from_name" label="Full Name" type="text" />
				<Input name="from_email" label="Email" type="email" />
				<TextArea name="message" label="Message" rows={10} cols={0} maxLength={600} />
				<div className={styles['form__submit-btn']}>{slotSubmitButton}</div>
			</SmartForm>
			<dialog className={`${styles['dialog']}`} open={isOpen}>
				<div className={`${styles['dialog__text']} corner-border`}>
					<p>Message has been sent successfully.</p>
					<p>I'll answer ASAP.</p>
					<p className={styles['dialog__sign']}>Thomas G.</p>
					<button
						className={styles['dialog__close-btn']}
						onClick={() => setIsOpen(prevState => !prevState)}
					>
						X
					</button>
				</div>
			</dialog>
		</>
	);
};

export default ContactSection;
