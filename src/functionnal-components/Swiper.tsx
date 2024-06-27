import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './swiper.scss';

import type { TProjectContent } from '@libs/types';
import type { FC } from 'react';
import { EffectCoverflow, EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectCard from './section/project/ProjectCard';
import styles from './Swiper.module.scss';

type Props = {
	effect: 'coverflow' | 'cube';
	projects: {
		body: string;
		data: TProjectContent;
	}[];
};

const SwiperTopics: FC<Props> = props => {
	const { projects, effect } = props;
	const content = projects.map((item, index) => {
		const { data, body } = item;

		return (
			<SwiperSlide key={index}>
				<ProjectCard
					title={data.title}
					codeUrl={data.codeUrl}
					previewUrl={data.previewUrl}
					desktopImg={data.desktopImg}
					mobileImg={data.mobileImg}
					technologies={data.technologies}
					body={body}
				/>
			</SwiperSlide>
		);
	});

	return (
		<>
			<div className={styles['projects']}>
				<Swiper
					effect={`${effect}`}
					modules={[Pagination, EffectCoverflow, EffectCube]}
					slidesPerView={'auto'}
					spaceBetween={0}
					grabCursor={true}
					cubeEffect={{
						shadow: false,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}}
					coverflowEffect={{
						rotate: 60,
						stretch: 10,
						depth: 10,
						modifier: 1,
						slideShadows: false,
					}}
					centeredSlides={true}
					pagination={{ clickable: false }}
					loop={true}
					speed={500}
					className={`swiper-${effect}`}
				>
					{content}
				</Swiper>
			</div>
		</>
	);
};

export default SwiperTopics;
