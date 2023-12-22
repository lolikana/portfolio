import IconCodePen from '@assets/icons/codepen-icon.svg';
import IconGithub from '@assets/icons/github-icon.svg';
import IconInstagram from '@assets/icons/instagram-icon.svg';
import IconLinkedIn from '@assets/icons/linkedin-icon.svg';

import type { TNavbarLinksData, TSnsData } from './types';

export const navbarLinksData: TNavbarLinksData[] = [
	{
		href: 'about'
	},
	{
		href: 'projects'
	}
];

export const snsData: TSnsData[] = [
	{
		site: 'github',
		link: 'https://github.com/lolikana',
		icon: IconGithub
	},
	{
		site: 'instagram',
		link: 'https://www.instagram.com/lolikana/',
		icon: IconInstagram
	},
	{
		site: 'codepen',
		link: 'https://codepen.io/lolikana',
		icon: IconCodePen
	},
	{
		site: 'linkedin',
		link: 'https://www.linkedin.com/in/thomas-guiart/',
		icon: IconLinkedIn
	}
];
