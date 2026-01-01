export type ExperienceType = 'work' | 'education';

export interface Role {
	title: string;
	startDate: string;
	endDate: string;
	description: string;
	points?: readonly string[];
}

export interface Experience {
	type: ExperienceType;
	organization: string;
	location?: string;
	roles: readonly Role[];
}

export const EXPERIENCES: readonly Experience[] = [
	{
		type: 'work',
		organization: 'Astha IT',
		location: 'Dhaka, Bangladesh',
		roles: [
			{
				title: 'Software Engineer III',
				startDate: '2024',
				endDate: 'Present',
				description:
					'Leading development of complex applications with focus on architecture and performance.',
				points: [
					'Architected Chess2 — a real-time multiplayer platform handling concurrent game sessions with WebSocket integration',
					'Built Docomate AI — an intelligent document processing system with OCR and natural language capabilities',
					'Established coding standards and review processes, improving code quality and reducing production bugs by 40%',
				],
			},
		],
	},
	{
		type: 'work',
		organization: 'Apsis Solutions Ltd.',
		location: 'Dhaka, Bangladesh',
		roles: [
			{
				title: 'Software Engineer',
				startDate: '2021',
				endDate: '2024',
				description:
					'Core engineer on enterprise ERP platform serving 500+ daily active users.',
				points: [
					'Designed and implemented modular architecture for ERP system, reducing feature development time by 35%',
					'Built reusable component library used across 15+ internal products',
					'Optimized critical rendering paths, achieving 60% improvement in page load times',
					'Mentored junior developers and led technical discussions on architecture decisions',
				],
			},
		],
	},
	{
		type: 'work',
		organization: 'Alesha Solutions Ltd.',
		location: 'Dhaka, Bangladesh',
		roles: [
			{
				title: 'Software Engineer',
				startDate: '2021',
				endDate: '2021',
				description:
					'Delivered end-to-end web solutions for diverse client projects.',
				points: [
					'Shipped 8+ production applications including e-commerce platforms and corporate websites',
					'Reduced development cycles by implementing reusable templates and automation',
					'Collaborated directly with clients to translate business requirements into technical solutions',
				],
			},
		],
	},
	{
		type: 'work',
		organization: 'Antopolis',
		location: 'Dhaka, Bangladesh',
		roles: [
			{
				title: 'Software Engineer',
				startDate: '2020',
				endDate: '2021',
				description: 'Built and optimized web applications for corporate clients.',
				points: [
					'Developed high-performance web applications with focus on Core Web Vitals optimization',
					'Implemented responsive designs achieving consistent experience across 20+ device configurations',
					'Collaborated with cross-functional teams to deliver projects on tight deadlines',
				],
			},
		],
	},
] as const;
