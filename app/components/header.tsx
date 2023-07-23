import Logo from '../images/logo';

export default function Header() {
	return (
		<header className="flex flex-row justify-between items-center shadow-md px-7 py-3">
			<Logo />
			<h1>HEADER</h1>
		</header>
	);
}
