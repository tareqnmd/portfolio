// App Metadata
export const APP_NAME = 'Md Tareq';
export const APP_DESCRIPTION =
	'I build modern web applications with Next.js and TypeScript — from productivity tools and file-sharing platforms to interactive games. I also write about JavaScript fundamentals to help developers understand the language deeply.';

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

// Google Analytics & Search Console
// Replace with your actual IDs from Google
export const GOOGLE_ANALYTICS_ID = 'G-XXXXXXXXXX'; // Get from: https://analytics.google.com
export const GOOGLE_SITE_VERIFICATION = 'your-verification-code'; // Get from: https://search.google.com/search-console

// Derived exports for backward compatibility
export const APP_AUTHOR_EMAIL = ExternalLinks.EMAIL;
export const APP_AUTHOR_WEBSITE = ExternalLinks.WEBSITE;
export const APP_AUTHOR_TWITTER = ExternalLinks.TWITTER;
export const APP_AUTHOR_LINKEDIN = ExternalLinks.LINKEDIN;
export const APP_AUTHOR_GITHUB = ExternalLinks.GITHUB;
export const APP_AUTHOR_BLOG = ExternalLinks.BLOG;
