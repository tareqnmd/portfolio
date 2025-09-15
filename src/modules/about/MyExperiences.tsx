import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
	{
		title: 'Software Engineer',
		company: 'Tech Company',
		date: '2022 - Present',
		description: 'Working on cool projects.',
		icon: <FaBriefcase />,
	},
	{
		title: 'Intern',
		company: 'Another Tech Company',
		date: '2021 - 2022',
		description: 'Learned a lot.',
		icon: <FaBriefcase />,
	},
	{
		title: "Bachelor's Degree",
		company: 'University',
		date: '2017 - 2021',
		description: 'Studied Computer Science.',
		icon: <FaGraduationCap />,
	},
];

const MyExperiences = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-3xl font-bold text-center mb-8">My Experiences</h2>
			<div className="relative wrap overflow-hidden p-10 h-full">
				<div
					className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
					style={{ left: '50%' }}
				></div>
				{experiences.map((experience, index) => (
					<div
						key={index}
						className={`mb-8 flex justify-between items-center w-full ${
							index % 2 === 0
								? 'flex-row-reverse left-timeline'
								: 'right-timeline'
						}`}
					>
						<div className="order-1 w-5/12"></div>
						<div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
							<h1 className="mx-auto font-semibold text-lg text-white">
								{experience.icon}
							</h1>
						</div>
						<div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
							<h3 className="mb-3 font-bold text-gray-800 text-xl">
								{experience.title}
							</h3>
							<p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
								{experience.company} - {experience.date}
							</p>
							<p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
								{experience.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyExperiences;
