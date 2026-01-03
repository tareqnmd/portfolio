export interface AboutContent {
	intro: string;
	description: readonly string[];
}

export const ABOUT_CONTENT: AboutContent = {
	intro: 'Building scalable systems, driving technical excellence',
	description: [
		"I'm a software engineer with 5+ years of experience architecting and delivering production applications used by thousands of users. From real-time multiplayer platforms to enterprise ERP systems, I focus on building performant, maintainable solutions that solve real problems.",
		"I believe in engineering fundamentals — clean architecture, type safety, and thoughtful abstractions. When I'm not shipping features, I write about JavaScript internals because understanding the 'why' behind the code makes the difference between a good engineer and a great one.",
	],
} as const;
