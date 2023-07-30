import { Coming_Soon } from 'next/font/google';

const coming_Soon = Coming_Soon({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

export default function ComingSoon() {
	return (
		<div className="w-full text-center flex items-center justify-center">
			<h3
				className={
					'absolute z-10 text-2xl text-gray-700 ' + coming_Soon.className
				}
			>
				COMING SOON!
			</h3>
			<div className="w-full bg-gray-300 rounded-lg flex overflow-hidden items-center justify-center h-60 animate-pulse"></div>
		</div>
	);
}
