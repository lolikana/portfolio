import type { ImageMetadata } from 'astro';

export type TNavbarLinksData = {
	href: 'about' | 'experiences' | 'works' | 'contact' | 'projects';
};

export type TSnsData = {
	site: 'github' | 'linkedin' | 'codepen' | 'instagram';
	link: string;
	icon: ImageMetadata;
};
