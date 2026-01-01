// App Metadata
export const APP_NAME = 'Md Tareq';
export const APP_LOGO_NAME = 'Tareq';
export const APP_DESCRIPTION =
	'Software Engineer with 5+ years of experience building scalable web applications, real-time systems, and developer tools. Passionate about clean architecture, performance optimization, and sharing knowledge through technical writing.';

export const APP_AUTHOR = 'Md Tareq';
export const APP_USERNAME = 'tareqnmd';
export const APP_KEYWORDS =
	'Software Engineer, Full Stack Developer, React, Next.js, TypeScript, Node.js, System Design, Performance Optimization, Technical Architecture';

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
