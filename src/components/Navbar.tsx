import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/logo-color.svg';

const Navbar = () => {
	return (
		<nav className='bg-white shadow-sm'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between w-full'>
					<div className='flex justify-between items-center w-full'>
						<Link href='/'>
							<Image
								src={'/logo-white.svg'}
								alt='logo'
								width={50}
								height={20}
								className=' object-contain'
							/>
						</Link>
						<div className='flex space-x-6'>
							<Link
								href='/dashboard'
								className='font-medium text-gray-500 hover:text-gray-900'
							>
								Dashboard
							</Link>
						</div>
						<div className='flex space-x-6'>
							<Link
								href='/dashboard'
								className='font-medium text-gray-500 hover:text-gray-900'
							>
								Login
							</Link>
							<Link
								href='/events'
								className='font-medium text-gray-500 hover:text-gray-900'
							>
								Register
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
