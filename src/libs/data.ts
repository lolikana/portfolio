import IconCodePen from '@assets/icon/codepen-icon.svg';
import IconGithub from '@assets/icon/github-icon.svg';
import IconInstagram from '@assets/icon/instagram-icon.svg';
import IconLinkedIn from '@assets/icon/linkedin-icon.svg';

import type { TNavbarLinksData, TSnsData } from './types';

export const navbarLinksData: TNavbarLinksData[] = [
	{
		href: 'about'
	},
	{
		href: 'experiences'
	},
	{
		href: 'works'
	},
	{
		href: 'contact'
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
