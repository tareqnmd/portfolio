export interface AboutContent {
	intro: string;
	description: readonly string[];
}

export const ABOUT_CONTENT: AboutContent = {
	intro: 'Building practical tools, sharing knowledge',
	description: [
		"I'm a software engineer who loves turning ideas into real products. I've built Share for seamless file collaboration, Organizer for managing budgets and notes, an interactive Chess game, and a blog platform where I write about JavaScript — because I believe understanding the fundamentals makes you a better developer.",
		'My stack centers around Next.js, TypeScript, React, and Tailwind CSS. I enjoy the full spectrum of web development — from crafting smooth user experiences to architecting scalable backends. When I learn something interesting, I write about it. Topics like closures, hoisting, and scope might seem basic, but mastering them unlocks everything else.',
	],
} as const;

