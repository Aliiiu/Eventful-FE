import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const urbanist = Urbanist({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-urbanist',
});

export const metadata: Metadata = {
	title: 'Eventful',
	description: 'Your passport to unforgettable moments',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={urbanist.className}>
				<Navbar />
				{
					<main className='flex min-h-screen flex-col items-center w-full mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8'>
						{children}
					</main>
				}
			</body>
		</html>
	);
}
