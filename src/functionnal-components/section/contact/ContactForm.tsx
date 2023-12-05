import Input from '@functionnal-components/smart-form/Input';
import SmartForm from '@functionnal-components/smart-form/SmartForm';
import TextArea from '@functionnal-components/smart-form/TextArea';
import type { TContact } from '@libs/types';
import { contactFormValidation } from '@libs/validations';
import type { FC } from 'react';

import styles from './ContactForm.module.scss';

type Props = {
	slotSubmitButton: boolean;
};

const ContactSection: FC<Props> = props => {
	const { slotSubmitButton } = props;
	const contactData = async (contact: TContact) => {
		console.log(contact);
		return;
	};
	return (
		<SmartForm<TContact>
			validationSchema={contactFormValidation}
			options={{}}
			onSubmnit={contactData}
		>
			<Input name="fullName" label="Full Name" type="text" />
			<Input name="email" label="Email" type="email" />
			<TextArea name="message" label="Message" rows={10} cols={0} maxLength={600} />
			<div className={styles['form__submit-btn']}>{slotSubmitButton}</div>
		</SmartForm>
	);
};

export default ContactSection;
