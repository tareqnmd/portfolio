// App Metadata
export const APP_NAME = 'Md Tareq';
export const APP_DESCRIPTION =
	'Welcome to my personal portfolio. I am a passionate Software Engineer specializing in creating beautiful and functional web applications. Explore my projects to see my skills in action.';

export const APP_AUTHOR = 'Md Tareq';
export const APP_USERNAME = 'tareqnmd';
export const APP_KEYWORDS =
	'Software Engineer, Web Developer, Portfolio, Projects, Skills, React, Next.js, Tailwind CSS, TypeScript, JavaScript, HTML, CSS';

// External Links (Single source of truth)
export const ExternalLinks = {
	WEBSITE: 'https://tareqnmd.com',
	BLOG: 'https://blog.tareqnmd.com',
	GITHUB: 'https://github.com/tareqnmd',
	LINKEDIN: 'https://linkedin.com/in/tareqnmd',
	TWITTER: 'https://twitter.com/tareqnmd',
	EMAIL: 'tareqnmd@gmail.com',
} as const;

// Derived exports for backward compatibility
export const APP_AUTHOR_EMAIL = ExternalLinks.EMAIL;
export const APP_AUTHOR_WEBSITE = ExternalLinks.WEBSITE;
export const APP_AUTHOR_TWITTER = ExternalLinks.TWITTER;
export const APP_AUTHOR_LINKEDIN = ExternalLinks.LINKEDIN;
export const APP_AUTHOR_GITHUB = ExternalLinks.GITHUB;
export const APP_AUTHOR_BLOG = ExternalLinks.BLOG;
