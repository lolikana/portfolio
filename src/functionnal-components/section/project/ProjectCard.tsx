import SmartphoneFrame from '@assets/shape/frame1.png';
import type { FC } from 'react';

import style from './ProjectCard.module.scss';
import ProjectCardTop from './ProjectCardTop';

type Props = {
	title: string;
	codeUrl: string;
	previewUrl: string;
	desktopImg: {
		url: {
			src: string;
		};
		alt: string;
	};
	mobileImg: {
		url: {
			src: string;
		};
		alt: string;
	};
};

const ProjectCard: FC<Props> = props => {
	const { title, codeUrl, previewUrl, desktopImg, mobileImg } = props;

	return (
		<div className={style['project-card']}>
			<ProjectCardTop title={title} codeUrl={codeUrl} previewUrl={previewUrl} />
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
				<div className={`${style['project-card__overlay']} ${style['corner-border']}`} />
			</div>
		</div>
	);
};

export default ProjectCard;
