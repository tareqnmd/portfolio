export interface NavLink {
	name: string;
	href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Blog', href: '#blogs' },
] as const;

