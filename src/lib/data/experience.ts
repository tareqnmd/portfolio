export type ExperienceType = 'work' | 'education';

export interface Experience {
	type: ExperienceType;
	title: string;
	organization: string;
	location?: string;
	startDate: string;
	endDate: string;
	description: string;
	highlights?: readonly string[];
}

export const EXPERIENCES: readonly Experience[] = [
	{
		type: 'work',
		title: 'Software Engineer',
		organization: 'Tech Company',
		location: 'San Francisco, CA',
		startDate: '2022',
		endDate: 'Present',
		description: 'Building scalable web applications and leading frontend architecture.',
		highlights: [
			'Led development of microservices architecture',
			'Improved application performance by 40%',
			'Mentored junior developers',
		],
	},
	{
		type: 'work',
		title: 'Frontend Developer',
		organization: 'Another Tech Company',
		location: 'New York, NY',
		startDate: '2021',
		endDate: '2022',
		description: 'Developed user interfaces and improved application performance.',
		highlights: [
			'Built responsive web applications using React',
			'Implemented CI/CD pipelines',
			'Collaborated with design team on UI/UX',
		],
	},
	{
		type: 'education',
		title: 'Bachelor of Science in Computer Science',
		organization: 'University',
		location: 'Boston, MA',
		startDate: '2017',
		endDate: '2021',
		description: "Bachelor's degree with focus on software engineering and web development.",
		highlights: [
			'GPA: 3.8/4.0',
			'Dean\'s List all semesters',
			'Senior project: E-commerce platform',
		],
	},
] as const;

