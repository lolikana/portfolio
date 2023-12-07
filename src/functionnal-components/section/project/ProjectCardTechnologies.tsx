import type { TProjectContent } from '@libs/types';
import type { FC } from 'react';

import styles from './ProjectCardTechnologies.module.scss';

const ProjectCardTechnologies: FC<{
	technologies: TProjectContent['technologies'];
}> = props => {
	const { technologies } = props;

	return (
		<div className={styles['technologies']}>
			{technologies.map(icon => (
				<img
					key={icon}
					src={`icons/${icon}.svg`}
					alt={`${icon} icon`}
					title={icon}
					width={44}
					height={44}
					loading="lazy"
				/>
			))}
		</div>
	);
};

export default ProjectCardTechnologies;
