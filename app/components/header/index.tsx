import { useState } from 'react';
import Logo from '../../images/logo';
import './styles.css';

export default function Header() {
	const [hambOpen, setHambOpen] = useState(false);
	return (
		<header className="flex flex-row justify-between items-center px-2 md:px-7 py-3">
			<Logo />
			<button
				className="button"
				aria-expanded={hambOpen}
				onClick={() => setHambOpen(!hambOpen)}
			>
				<svg
					stroke="var(--button-color)"
					fill="none"
					className="hamburger"
					viewBox="-10 -10 120 120"
					width="50"
				>
					<path
						className="line"
						stroke-width="10"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
					></path>
				</svg>
			</button>
			{/* <h1>HEADER</h1> */}
		</header>
	);
}
