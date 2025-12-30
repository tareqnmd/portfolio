export interface Project {
	title: string;
	description: string;
	tags: readonly string[];
	github: string;
	live: string;
}

export const PROJECTS: readonly Project[] = [
	{
		title: 'E-Commerce Platform',
		description: 'Full-stack e-commerce solution with Next.js, Stripe integration, and admin dashboard.',
		tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
		github: 'https://github.com/tareqnmd/ecommerce-platform',
		live: 'https://ecommerce.tareqnmd.com',
	},
	{
		title: 'Task Management App',
		description: 'Kanban-style task manager with real-time collaboration features.',
		tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
		github: 'https://github.com/tareqnmd/task-manager',
		live: 'https://tasks.tareqnmd.com',
	},
	{
		title: 'AI Chat Assistant',
		description: 'Intelligent chatbot powered by OpenAI with custom training capabilities.',
		tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
		github: 'https://github.com/tareqnmd/ai-chat',
		live: 'https://chat.tareqnmd.com',
	},
	{
		title: 'Portfolio Website',
		description: 'Modern portfolio website built with Astro and Tailwind CSS.',
		tags: ['Astro', 'Tailwind', 'TypeScript'],
		github: 'https://github.com/tareqnmd/portfolio',
		live: 'https://tareqnmd.com',
	},
	{
		title: 'Weather Dashboard',
		description: 'Real-time weather tracking with visualizations and forecasts.',
		tags: ['React', 'Chart.js', 'Weather API'],
		github: 'https://github.com/tareqnmd/weather-dashboard',
		live: 'https://weather.tareqnmd.com',
	},
	{
		title: 'Analytics Dashboard',
		description: 'Dashboard for tracking metrics and performance across platforms.',
		tags: ['Vue.js', 'D3.js', 'Node.js'],
		github: 'https://github.com/tareqnmd/analytics-dashboard',
		live: 'https://analytics.tareqnmd.com',
	},
] as const;

