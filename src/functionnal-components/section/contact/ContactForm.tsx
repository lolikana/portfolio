// import SectionCard from '@components/ui/SectionCard.astro';
import Input from '@functionnal-components/smart-form/Input';
import SmartForm from '@functionnal-components/smart-form/SmartForm';
import TextArea from '@functionnal-components/smart-form/TextArea';
import type { TContact } from '@libs/types';
import { contactFormValidation } from '@libs/validations';

const ContactSection = () => {
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
			<input type="submit" value="Submit" />
		</SmartForm>
	);
};

export default ContactSection;
