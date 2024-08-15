'use client';

import { validateToken } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
	const [role, setRole] = useState<string>();
	const router = useRouter();

	console.log(router);

	useEffect(() => {
		validateToken(localStorage.getItem('token') || '')
			.then((res) => {
				setRole(res.userType as string);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [router]);

	const handleLogout = () => {
		localStorage.removeItem('token');
		setRole(undefined);
		router.push('/');
	};

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
							{role === 'creator' && (
								<Link
									href={'/event/create'}
									className='font-medium text-gray-500 hover:text-gray-900'
								>
									Create Event
								</Link>
							)}
						</div>
						<div className='flex space-x-6'>
							{localStorage.getItem('token') || '' ? (
								<button
									className='font-medium text-gray-500 hover:text-gray-900'
									onClick={handleLogout}
								>
									Logout
								</button>
							) : (
								<Link
									href='/login'
									className='font-medium text-gray-500 hover:text-gray-900'
								>
									Login
								</Link>
							)}
							<Link
								href='/register'
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
