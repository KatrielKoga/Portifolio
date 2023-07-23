import Footer from './components/footer';
import Header from './components/header';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Header />
				<div className="container min-h-screen">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
