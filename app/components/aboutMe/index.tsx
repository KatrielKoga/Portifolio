export default function AboutMe() {
	return (
		<div className="w-full rounded-lg  overflow-hidden shadow-md">
			<div className=" px-4 py-2 bg-gray-200 flex items-center justify-center relative font-medium text-gray-600 border-b-gray-300 border-b">
				<div className="flex gap-1 absolute left-4">
					<span className="bg-red-500 h-4 w-4 rounded-full border-red-600 border"></span>
					<span className="bg-yellow-500 h-4 w-4 rounded-full border-yellow-600 border"></span>
					<span className="bg-green-500 h-4 w-4 rounded-full border-green-600 border"></span>
				</div>
				About_me.sh
			</div>
			<div className="font-mono py-4 px-5 text-green-600 bg-white pb-8">
				<span className="text-blue-500 font-bold ">~$ {'>'}</span> whoami <br />
				<span className="text-blue-500 font-bold ">~$ {'>'}</span> I'm Katriel
				Koga, a passionate and dedicated full-stack software developer. With a
				strong background in various technologies, including{' '}
				<span className="text-blue-500 font-bold">JavaScript</span>,{' '}
				<span className="text-blue-500 font-bold">Node.js</span>,{' '}
				<span className="text-blue-500 font-bold">React</span>,{' '}
				<span className="text-blue-500 font-bold">HTML</span>,{' '}
				<span className="text-blue-500 font-bold">CSS</span>,{' '}
				<span className="text-blue-500 font-bold">SQL</span>, and{' '}
				<span className="text-blue-500 font-bold">MongoDB</span>, I strive to
				craft robust and efficient solutions for complex technological
				challenges.
				<br /> My journey in the world of software development has been driven
				by a perpetual quest for knowledge and a relentless curiosity for
				emerging technologies. <br />I find great joy in mastering new tools and
				methodologies, integrating them into my work to create innovative and
				cutting-edge solutions. <br />
				Feel free to reach out to me for collaboration, consultation, or just to
				exchange ideas. Let's build the future together through the power of
				code.<span className="animate-ping duration-100 text-blue-500">|</span>
			</div>
		</div>
	);
}
