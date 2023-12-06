import type { FC } from 'react';

import style from './ProjectCardLink.module.scss';

type Props = {
	url: string;
	icon: 'github' | 'preview';
};

const ProjectCardLink: FC<Props> = props => {
	const { icon, url } = props;
	return (
		<a
			className={`${style['project-card__link']} ${style[icon]}`}
			target="_blank"
			href={url}
			aria-label={`go to ${icon}`}
		></a>
	);
};

export default ProjectCardLink;
