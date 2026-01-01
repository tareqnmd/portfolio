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
			'Real-time file sharing platform with encrypted transfers, link expiration, and collaborative workspaces. Handles concurrent uploads with chunked streaming.',
		tags: ['Next.js', 'TypeScript', 'Node.js', 'WebSocket'],
		github: 'https://github.com/tareqnmd/share',
		live: 'https://share.tareqnmd.com',
	},
	{
		title: 'Chess',
		description:
			'Full-featured chess engine with move validation, game state management, and AI opponent. Implements standard chess rules including castling, en passant, and promotion.',
		tags: ['Next.js', 'TypeScript', 'Game Logic', 'State Management'],
		github: 'https://github.com/tareqnmd/chess',
		live: 'https://chess.tareqnmd.com',
	},
	{
		title: 'Organizer',
		description:
			'Productivity suite featuring budget analytics with visualizations, rich-text notes with markdown support, and data export capabilities.',
		tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
		github: 'https://github.com/tareqnmd/organizer-frontend-v1',
		live: 'https://organizer.tareqnmd.com',
	},
	{
		title: 'Blog',
		description:
			'Technical blog with MDX support, syntax highlighting, SEO optimization, and RSS feeds. Writing about JavaScript internals and engineering patterns.',
		tags: ['Next.js', 'MDX', 'TypeScript', 'SEO'],
		github: 'https://github.com/tareqnmd/blog',
		live: 'https://blog.tareqnmd.com',
	},
] as const;
