'use client';

import { loginUser } from '@/lib/api';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, reset } = useForm({
		mode: 'onChange',
	});

	const onSubmit = async (data: any) => {
		setLoading(true);
		const response: { accessToken: string } = await loginUser(data);
		localStorage.setItem('token', JSON.stringify(response.accessToken));
		reset();
		setLoading(false);
	};
	return (
		<div className='mx-auto max-w-md'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-white shadow-md rounded p-8 border'
			>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='email'
					>
						Email
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='email'
						placeholder='Email'
						{...register('email')}
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='password'
					>
						Password
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='text'
						placeholder='Password'
						{...register('password')}
					/>
				</div>
				<div className='flex items-center justify-between gap-5'>
					<button
						className='bg-blue-500 hover:bg-blue-400 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						{loading ? 'Loading...' : 'Login'}
					</button>
					<p className='text-sm text-gray-500'>
						Don&apos;t have an account?{' '}
						<Link href='/register' className='text-blue-500 hover:underline'>
							Register
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
