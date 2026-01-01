export interface Blog {
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	url: string;
}

export const BLOGS: readonly Blog[] = [
	{
		title: 'Immediately Invoked Function Expressions (IIFE)',
		excerpt:
			'IIFE is a technique where we create a function and execute it immediately in one step, instead of defining it first and then calling it separately.',
		date: 'Dec 27, 2025',
		readTime: '2 min',
		url: 'https://blog.tareqnmd.com/blogs/immediately-invoked-function-expressions-iife',
	},
	{
		title: 'A Story of Closures in JavaScript',
		excerpt:
			'In JavaScript, a function can always remember values from the place where it was created — even after that outer code has finished running.',
		date: 'Dec 22, 2025',
		readTime: '3 min',
		url: 'https://blog.tareqnmd.com/blogs/a-story-of-closures-in-javascript',
	},
	{
		title: 'What is Hoisting in JavaScript?',
		excerpt:
			"Hoisting is one of JavaScript's most interesting behaviors. JavaScript processes your code in two main phases: Creation Phase and Execution Phase.",
		date: 'Dec 16, 2025',
		readTime: '3 min',
		url: 'https://blog.tareqnmd.com/blogs/what-is-hoisting-in-javascript',
	},
	{
		title: 'Scope in JavaScript',
		excerpt:
			'Scope is the area where variables and functions can be accessed in your code. Think of it as the "reach" of your variables.',
		date: 'Dec 14, 2025',
		readTime: '2 min',
		url: 'https://blog.tareqnmd.com/blogs/scope-in-javascript',
	},
] as const;
