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
	codeUrl?: string;
	previewUrl?: string;
	desktopImg: {
		url: { src: string; width: number; height: number };
		alt: string;
	};
	mobileImg: {
		url: { src: string };
		url_lazy: { src: string };
		alt: string;
	};
	technologies: string[];
};

export type TContact = {
	from_name: string;
	from_email: string;
	message: string;
};
