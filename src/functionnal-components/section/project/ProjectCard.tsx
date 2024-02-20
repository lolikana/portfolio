import LaptopFrame from '@assets/shape/laptop-frame.webp';
import SmartphoneFrame from '@assets/shape/mobile-frame.webp';
import type { TProjectContent } from '@libs/types';
import { type FC, type LegacyRef } from 'react';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

import LaptopCardFrame from '../../ui/LaptopCardFrame';
import MobileCardFrame from '../../ui/MobileCardFrame';
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
				ref={!containerRef ? undefined : (containerRef as LegacyRef<HTMLDivElement>)}
			>
				<div className={`${styles['project-card__desktopImg']}`}>
					<LaptopCardFrame frame={LaptopFrame} BgSource={`${desktopImg.url.src}`} />
				</div>
				<div className={`${styles['project-card__mobileImg']}`}>
					<MobileCardFrame
						frame={SmartphoneFrame}
						BgSource={`${isVisible ? mobileImg.url.src : mobileImg.url_lazy.src}`}
					/>
				</div>
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
