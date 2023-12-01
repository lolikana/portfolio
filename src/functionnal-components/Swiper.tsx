import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.scss';

import type { FC } from 'react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectCard from './section/project/ProjectCard';
import style from './Swiper.module.scss';

type Props = {
	projects: {
		data: {
			title: string;
			codeUrl: string;
			previewUrl: string;
			desktopImg: {
				url: { src: string };
				alt: string;
			};
			mobileImg: {
				url: { src: string };
				alt: string;
			};
		};
	}[];
};

const SwiperTopics: FC<Props> = props => {
	const { projects } = props;
	return (
		<>
			<div className={style['projects']}>
				<Swiper
					effect={'coverflow'}
					modules={[Pagination, Navigation, EffectCoverflow]}
					slidesPerView={'auto'}
					spaceBetween={0}
					grabCursor={false}
					coverflowEffect={{
						rotate: 50,
						stretch: 50,
						depth: 50,
						modifier: 1,
						slideShadows: true
					}}
					centeredSlides={true}
					pagination={{ clickable: false }}
					navigation={true}
					loop={true}
					speed={500}
					className="swiper-container"
				>
					{projects.map((item, index) => {
						const { data } = item;

						return (
							<SwiperSlide key={index}>
								<ProjectCard
									title={data.title}
									codeUrl={data.codeUrl}
									previewUrl={data.previewUrl}
									desktopImg={data.desktopImg}
									mobileImg={data.mobileImg}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
};

export default SwiperTopics;
