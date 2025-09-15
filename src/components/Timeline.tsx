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
}

const TimelineItem = ({
	children,
	isLeft,
	icon,
	className,
}: TimelineItemProps) => (
	<div
		className={cn(
			'mb-8 flex justify-between items-center w-full',
			isLeft ? 'flex-row-reverse left-timeline' : 'right-timeline',
			className
		)}
	>
		<div className="order-1 w-5/12"></div>
		<div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
			{icon ? (
				<div className="mx-auto font-semibold text-lg text-white">{icon}</div>
			) : (
				<div className="mx-auto">
					<div className="w-4 h-4 bg-white rounded-full"></div>
				</div>
			)}
		</div>

		<div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
			{children}
		</div>
	</div>
);

const Timeline = ({ children }: TimelineProps) => {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="relative wrap overflow-hidden p-10 h-full">
				<div
					className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
					style={{ left: '50%' }}
				></div>
				{children}
			</div>
		</div>
	);
};

export { Timeline, TimelineItem };
