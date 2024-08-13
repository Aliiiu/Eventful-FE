import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';

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
				{
					<main className='flex min-h-screen flex-col items-center justify-between p-24'>
						{children}
					</main>
				}
			</body>
		</html>
	);
}
