import { IconName } from '../icons';

export interface NavLink {
	name: string;
	href: string;
	icon: IconName;
}

export enum NavIcon {
	HOME = IconName.HOME,
	USER = IconName.USER,
	BRIEFCASE = IconName.BRIEFCASE,
	FOLDER = IconName.FOLDER,
	PEN = IconName.PEN,
}

export const NAV_LINKS: readonly NavLink[] = [
	{ name: 'Home', href: '#home', icon: IconName.HOME },
	{ name: 'About', href: '#about', icon: IconName.USER },
	{ name: 'Experience', href: '#experience', icon: IconName.BRIEFCASE },
	{ name: 'Projects', href: '#projects', icon: IconName.FOLDER },
	{ name: 'Blog', href: '#blogs', icon: IconName.PEN },
] as const;
