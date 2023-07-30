import AboutMe from './components/aboutMe';
import { Share_Tech_Mono } from 'next/font/google';
import ComingSoon from './components/inConstruction';

const major_Mono_Display = Share_Tech_Mono({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});
export default function Page() {
	return (
		<div>
			<section className="m-0 w-full px-5 py-8 md:px-10 md:py-16 grid place-content-center text-center ">
				<h1 className={'md:title text-3xl ' + major_Mono_Display.className}>
					Hello, my name is <span style={{ color: '#2389CB' }}>Katriel</span>!
				</h1>
				<p className={'text-gray-700 xl:mt-6 md:subtitle'}>
					I'm a Full Stack Developer
				</p>
			</section>
			<section className="px-5 py-3 sm:px-20 lg:px-24 w-full">
				<AboutMe />
			</section>
			<section className="px-5 py-3 flex flex-col items-center sm:px-20 lg:px-24 w-full">
				<h2
					className={'text-2xl font-bold mb-3 ' + major_Mono_Display.className}
				>
					Projects
				</h2>
				<ComingSoon />
			</section>
			<section className="px-5 py-3 flex flex-col items-center sm:px-20 lg:px-24 w-full">
				<h2
					className={'text-2xl font-bold mb-3 ' + major_Mono_Display.className}
				>
					Skills
				</h2>
				<ComingSoon />
			</section>
			<section className="px-5 py-3 pb-5 flex flex-col items-center sm:px-20 lg:px-24 w-full">
				<h2
					className={'text-2xl font-bold mb-3 ' + major_Mono_Display.className}
				>
					Get in touch
				</h2>
				<ComingSoon />
			</section>
		</div>
	);
}
