export enum IconName {
	GITHUB = 'github',
	LINKEDIN = 'linkedin',
	TWITTER = 'twitter',
	ENVELOPE = 'envelope',
	EXTERNAL_LINK = 'external-link',
	CHEVRON_DOWN = 'chevron-down',
	MENU = 'menu',
	X = 'x',
	BRIEFCASE = 'briefcase',
	GRADUATION_CAP = 'graduation-cap',
	ARROW_RIGHT = 'arrow-right',
	HOME = 'home',
	USER = 'user',
	FOLDER = 'folder',
	PEN = 'pen',
}

export type IconNameValue = `${IconName}`;
export interface IconProps {
	class?: string;
	size?: number;
}
