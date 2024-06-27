import { type FC } from 'react';

import styles from './ProjectCardOverlay.module.scss';

type Props = {
	body: string;
};
const ProjectCardOverlay: FC<Props> = props => {
	const { body } = props;
	return (
		<div className={`${styles['overlay']} corner-border`}>
			<p className={`${styles['overlay__description']} text-justify`}>{body}</p>
		</div>
	);
};

export default ProjectCardOverlay;
