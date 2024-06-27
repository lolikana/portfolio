import type { FC } from 'react';

import styles from './MobileCardFrame.module.scss';

type Props = {
	frame: ImageMetadata;
	BgSource: string;
};

const MobileCardFrame: FC<Props> = ({ frame, BgSource }) => {
	return (
		<div className={styles['frame_container']}>
			<img
				className={styles['frame_shape']}
				alt='frame'
				src={frame.src}
				width={frame.width}
				height={frame.height}
				loading='lazy'
			/>
			<div
				className={styles['frame_screen']}
				style={{
					backgroundImage: `url(${BgSource})`,
				}}
			></div>
		</div>
	);
};

export default MobileCardFrame;
