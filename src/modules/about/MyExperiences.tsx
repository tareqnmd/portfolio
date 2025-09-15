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
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-3xl font-bold text-center mb-8">My Experiences</h2>
			<Timeline>
				{experiences.map((exp, index) => (
					<TimelineItem
						key={index}
						isLeft={index % 2 === 0}
						icon={exp.icon}
					>
						<div>
							<h3 className="text-lg font-bold">{exp.title}</h3>
							<p className="text-sm text-gray-500">{exp.subtitle}</p>
							<p className="text-sm text-gray-500">{exp.date}</p>
							<p className="text-sm mt-2">{exp.description}</p>
						</div>
					</TimelineItem>
				))}
			</Timeline>
		</div>
	);
};

export default MyExperiences;
