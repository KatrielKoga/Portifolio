'use client';

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
			<body className="bg-gray-100">
				<Header />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
