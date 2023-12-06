import SmartphoneFrame from '@assets/shape/mobile-frame.webp';
import type { TProjectContent } from '@libs/types';
import type { FC } from 'react';

import styles from './ProjectCard.module.scss';
import ProjectCardOverlay from './ProjectCardOverlay';
import ProjectCardTechnologies from './ProjectCardTechnologies';
import ProjectCardTop from './ProjectCardTop';

const ProjectCard: FC<TProjectContent & { body: string }> = props => {
	const { title, codeUrl, previewUrl, desktopImg, mobileImg, technologies, body } = props;

	return (
		<div className={styles['project-card']}>
			<div className={styles['project-card__top']}>
				<ProjectCardTop title={title} codeUrl={codeUrl} previewUrl={previewUrl} />
			</div>
			<div className={styles['project-card__imgContainer']}>
				<img
					className={styles['project-card__desktopImg']}
					src={desktopImg.url.src}
					alt={desktopImg.alt}
					loading="lazy"
				/>
				<img
					className={styles['project-card__mobileImg']}
					alt="mobile frame"
					src={SmartphoneFrame.src}
					style={{ backgroundImage: `url(${mobileImg.url.src})` }}
					width={SmartphoneFrame.width}
					height={SmartphoneFrame.height}
					loading="lazy"
				/>
				<div className={`${styles['project-card__overlay']}`}>
					<ProjectCardOverlay body={body} />
				</div>
			</div>
			<div className={styles['project-card_technologies']}>
				<ProjectCardTechnologies technologies={technologies} />
			</div>
		</div>
	);
};

export default ProjectCard;
