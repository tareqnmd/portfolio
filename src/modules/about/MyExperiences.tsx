import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { Timeline, TimelineItem } from '../../components/Timeline';

const experiences = [
	{
		title: 'Software Engineer',
		subtitle: 'Tech Company',
		date: '2022 - Present',
		description: 'Working on cool projects.',
		icon: <FaBriefcase />,
	},
	{
		title: 'Intern',
		subtitle: 'Another Tech Company',
		date: '2021 - 2022',
		description: 'Learned a lot.',
		icon: <FaBriefcase />,
	},
	{
		title: "Bachelor's Degree",
		subtitle: 'University',
		date: '2017 - 2021',
		description: 'Studied Computer Science.',
		icon: <FaGraduationCap />,
	},
];

const MyExperiences = () => {
	return (
		<section className="experience-section py-12">
			<h2 className="section-title mb-8 text-center text-3xl font-bold">
				My Experiences
			</h2>
			<Timeline className="experience-timeline">
				{experiences.map((exp, index) => (
					<TimelineItem
						key={index}
						isLeft={index % 2 === 0}
						icon={exp.icon}
						className="experience-item"
					>
						<div className="experience-content">
							<h3 className="experience-title text-lg font-bold">
								{exp.title}
							</h3>
							<p className="experience-company text-sm text-slate-500 dark:text-slate-300">
								{exp.subtitle}
							</p>
							<p className="experience-period text-sm text-slate-500 dark:text-slate-300">
								{exp.date}
							</p>
							<p className="experience-description mt-2 text-sm">
								{exp.description}
							</p>
						</div>
					</TimelineItem>
				))}
			</Timeline>
		</section>
	);
};

export default MyExperiences;
