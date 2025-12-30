export interface AboutContent {
	intro: string;
	description: readonly string[];
}

export const ABOUT_CONTENT: AboutContent = {
	intro: 'Background and experience',
	description: [
		"I'm a software developer with a passion for building clean, efficient, and user-friendly applications. I specialize in modern web technologies and enjoy solving complex problems with simple solutions.",
		'With experience in both frontend and backend development, I focus on writing maintainable code and creating seamless user experiences.',
	],
} as const;

