import type { FC } from 'react';

import ProjectCardLink from './ProjectCardLink';
import style from './ProjectCardTop.module.scss';

type Props = {
	title: string;
	codeUrl: string;
	previewUrl: string;
};

const ProjectCardTop: FC<Props> = props => {
	const { title, codeUrl, previewUrl } = props;
	return (
		<div className={style['project-card__top']}>
			<h3 className={style['project-card__title']}>{title}</h3>
			<div className={style['project-card__links']}>
				{codeUrl && <ProjectCardLink icon="github" url={codeUrl} />}
				{previewUrl && <ProjectCardLink icon="preview" url={previewUrl} />}
			</div>
		</div>
	);
};

export default ProjectCardTop;
