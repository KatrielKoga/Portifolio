import './page.css';
import { Share_Tech_Mono } from 'next/font/google';

const major_Mono_Display = Share_Tech_Mono({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});
export default function Page() {
	return (
		<div>
			<section className="content">
				<h1 className={'title ' + major_Mono_Display.className}>
					Hello, my name is <span style={{ color: '#2389CB' }}>Katriel</span>!
				</h1>
				<p className={'subtitle'}>Welcome to my website!</p>
			</section>
			<section className="px-5 py-3 sm:flex sm:px-12 sm:gap-10 lg:px-24 w-full">
				<h2 className="font-mono whitespace-nowrap mb-5 font-bold">
					~$ whoami
				</h2>
				<p>
					Est magna commodo esse quis voluptate velit ut. Ex ullamco tempor
					culpa laboris id eiusmod minim. Voluptate minim nisi minim anim esse
					pariatur consectetur anim nisi culpa sunt exercitation occaecat. Magna
					culpa tempor id esse nostrud minim dolor occaecat consectetur. Est
					magna commodo esse quis voluptate velit ut. Ex ullamco tempor culpa
					laboris id eiusmod minim. Voluptate minim nisi minim anim esse
					pariatur consectetur anim nisi culpa sunt exercitation occaecat.
				</p>
			</section>
		</div>
	);
}
