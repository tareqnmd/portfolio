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
					'Developing complex applications with modern architecture patterns.',
				points: [
					'Built Chess2 - an advanced chess platform with real-time multiplayer',
					'Developed Docomate AI - intelligent document processing system',
					'Architected scalable frontend solutions using Next.js and TypeScript',
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
					'Developing front-end of an ERP system with Next.js and collaborating with product teams.',
				points: [
					'Developed front-end of ERP systems with Next.js',
					'Implemented high-quality, scalable, and reusable code',
					'Optimized applications for maximum speed and scalability',
					'Collaborated with product team on new feature developments',
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
				title: 'Frontend Developer',
				startDate: '2021',
				endDate: '2021',
				description:
					'Managed website development projects from initial design through completion.',
				points: [
					'Implemented websites, mobile apps, and landing pages from concept to deployment',
					'Ensured technical feasibility of UI/UX designs',
					'Standardized output with responsive, mobile-first approach',
					'Maintained brand consistency throughout designs',
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
				title: 'Frontend Developer',
				startDate: '2020',
				endDate: '2021',
				description: 'Designed and maintained corporate and client websites.',
				points: [
					'Worked closely with programmers and clients to meet project requirements',
					'Optimized web pages for maximum speed and scalability',
					'Assessed UX and UI designs for technical feasibility',
				],
			},
			{
				title: 'Intern',
				startDate: '2020',
				endDate: '2020',
				description:
					'Started career learning frontend development fundamentals.',
				points: [
					'Learned modern web development practices',
					'Assisted in building UI components',
					'Gained hands-on experience with HTML, CSS, and JavaScript',
				],
			},
		],
	},
] as const;
