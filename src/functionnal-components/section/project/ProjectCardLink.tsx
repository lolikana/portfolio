import type { FC } from 'react';

import styles from './ProjectCardLink.module.scss';

type Props = {
	url: string;
	icon: 'github' | 'preview';
};

const ProjectCardLink: FC<Props> = props => {
	const { icon, url } = props;
	return (
		<a
			className={`${styles['project-card__link']} ${styles[icon]}`}
			target='_blank'
			href={url}
			aria-label={`go to ${icon}`}
		></a>
	);
};

export default ProjectCardLink;
