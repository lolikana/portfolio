import SmartphoneFrame from '@assets/shape/mobile-frame.webp';
import type { TProjectContent } from '@libs/types';
import { type FC } from 'react';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

import styles from './ProjectCard.module.scss';
import ProjectCardOverlay from './ProjectCardOverlay';
import ProjectCardTechnologies from './ProjectCardTechnologies';
import ProjectCardTop from './ProjectCardTop';

const ProjectCard: FC<TProjectContent & { body: string }> = props => {
	const { title, codeUrl, previewUrl, desktopImg, mobileImg, technologies, body } = props;
	const [containerRef, isVisible] = useIntersectionObserver({
		root: null,
		threshold: 0,
		rootMargin: '100px'
	});

	return (
		<div className={`${styles['project-card']}`}>
			<div className={styles['project-card__top']}>
				<ProjectCardTop title={title} codeUrl={codeUrl} previewUrl={previewUrl} />
			</div>
			<div
				className={`${styles['project-card__imgContainer']} ${
					!isVisible ? styles['lazy-load'] : ''
				}`}
				ref={containerRef}
			>
				<img
					className={styles['project-card__desktopImg']}
					src={desktopImg.url.src}
					alt={desktopImg.alt}
					loading="lazy"
				/>
				<img
					className={`${styles['project-card__mobileImg']}`}
					alt="mobile frame"
					src={SmartphoneFrame.src}
					style={{
						backgroundImage: `url(${isVisible ? mobileImg.url.src : mobileImg.url_lazy.src})`
					}}
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
