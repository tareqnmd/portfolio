export interface Project {
	title: string;
	description: string;
	tags: readonly string[];
	github: string;
	live: string;
}

export const PROJECTS: readonly Project[] = [
	{
		title: 'Share',
		description:
			'A file and content sharing application for seamless collaboration.',
		tags: ['Next.js', 'TypeScript', 'React'],
		github: 'https://github.com/tareqnmd/share',
		live: 'https://share.tareqnmd.com',
	},
	{
		title: 'Chess',
		description:
			'Interactive chess game built with Next.js featuring modern UI and game logic.',
		tags: ['Next.js', 'TypeScript', 'CSS'],
		github: 'https://github.com/tareqnmd/chess',
		live: 'https://chess.tareqnmd.com',
	},
	{
		title: 'Organizer',
		description:
			'Personal management system with budget tracking and note management features.',
		tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn'],
		github: 'https://github.com/tareqnmd/organizer-frontend-v1',
		live: 'https://organizer.tareqnmd.com',
	},
	{
		title: 'Blog',
		description:
			'A modern blog platform for sharing articles and technical content.',
		tags: ['Next.js', 'TypeScript', 'React'],
		github: 'https://github.com/tareqnmd/blog',
		live: 'https://blog.tareqnmd.com',
	},
] as const;
