import SmartphoneFrame from '@assets/shape/frame1.png';
import type { TProjectContent } from '@libs/types';
import type { FC } from 'react';

import style from './ProjectCard.module.scss';
import ProjectCardTop from './ProjectCardTop';

const ProjectCard: FC<TProjectContent & { body: string }> = props => {
	const { title, codeUrl, previewUrl, desktopImg, mobileImg, technologies, body } = props;

	return (
		<div className={style['project-card']}>
			<div className={style['project-card__top']}>
				<ProjectCardTop title={title} codeUrl={codeUrl} previewUrl={previewUrl} />
			</div>
			<div className={style['project-card__imgContainer']}>
				<img
					className={style['project-card__desktopImg']}
					src={desktopImg.url.src}
					alt={desktopImg.alt}
				/>
				<img
					className={style['project-card__mobileImg']}
					src={SmartphoneFrame.src}
					style={{ backgroundImage: `url(${mobileImg.url.src})` }}
				/>
				<div className={`${style['project-card__overlay']} corner-border`}>
					<p className={`${style['project-card__description']} text-justify`}>{body}</p>
				</div>
			</div>
			<div className={style['project-card_technologies']}>
				{technologies.map(icon => (
					<img src={`icons/${icon}.svg`} alt={`${icon} icon`} title={icon} />
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
