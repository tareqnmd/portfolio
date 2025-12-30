export interface Blog {
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
}

export const BLOGS: readonly Blog[] = [
	{
		title: 'Building Scalable React Applications with Next.js 14',
		excerpt: 'Learn how to structure your Next.js projects for maximum scalability and maintainability.',
		date: 'Dec 15, 2025',
		readTime: '8 min',
	},
	{
		title: 'The Complete Guide to TypeScript Generics',
		excerpt: 'Deep dive into TypeScript generics with practical examples for better type safety.',
		date: 'Dec 10, 2025',
		readTime: '12 min',
	},
	{
		title: 'Modern CSS Techniques for 2025',
		excerpt: 'Explore modern CSS features like Container Queries, CSS Grid, and new color functions.',
		date: 'Dec 5, 2025',
		readTime: '6 min',
	},
	{
		title: 'Building REST APIs with Node.js',
		excerpt: 'A comprehensive guide to building robust and secure REST APIs using Node.js and Express.',
		date: 'Nov 28, 2025',
		readTime: '10 min',
	},
] as const;

