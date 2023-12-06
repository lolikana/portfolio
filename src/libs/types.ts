import type { ImageMetadata } from 'astro';

export type TNavbarLinksData = {
	href: 'about' | 'experiences' | 'works' | 'contact' | 'projects';
};

export type TSnsData = {
	site: 'github' | 'linkedin' | 'codepen' | 'instagram';
	link: string;
	icon: ImageMetadata;
};

export type TProjectContent = {
	title: string;
	codeUrl: string;
	previewUrl?: string;
	desktopImg: {
		url: { src: string };
		alt: string;
	};
	mobileImg: {
		url: { src: string };
		alt: string;
	};
	technologies: string[];
};

export type TContact = {
	from_name: string;
	from_email: string;
	message: string;
};
