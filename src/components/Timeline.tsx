import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';
import React from 'react';

export interface TimelineItemProps {
	children: ReactNode;
	isLeft: boolean;
	icon?: ReactNode;
	className?: string;
}

export interface TimelineProps {
	children: React.ReactElement<TimelineItemProps>[];
	className?: string;
}

const TimelineItem = ({
	children,
	isLeft,
	icon,
	className,
}: TimelineItemProps) => (
	<article
		className={cn(
			'timeline-item mb-8 flex w-full items-center justify-between',
			isLeft ? 'flex-row-reverse timeline-item-left' : 'timeline-item-right',
			className
		)}
		aria-label={`Timeline entry ${isLeft ? 'left' : 'right'} side`}
	>
		<div
			className="timeline-marker z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 shadow-md"
			aria-hidden="true"
		>
			{icon ? (
				<span className="timeline-icon text-lg font-medium text-white">
					{icon}
				</span>
			) : (
				<span className="timeline-dot flex h-4 w-4 rounded-full bg-white"></span>
			)}
		</div>
		<div
			className="timeline-content w-5/12 rounded-lg bg-white p-4 shadow-md dark:bg-slate-700"
			role="region"
		>
			{children}
		</div>
	</article>
);

const Timeline = ({ children, className }: TimelineProps) => {
	return (
		<section
			className={cn('timeline-container mx-auto px-4 py-8', className)}
			aria-label="Timeline"
		>
			<div className="timeline-wrapper relative h-full overflow-hidden p-6">
				<div
					className="timeline-divider absolute h-full border border-slate-300 dark:border-slate-600"
					style={{ left: '50%' }}
					aria-hidden="true"
				></div>
				{children}
			</div>
		</section>
	);
};

export { Timeline, TimelineItem };
