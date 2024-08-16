import { registerUser } from '@/lib/api';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateUserForm = ({
	role,
	setDefaultRole,
}: {
	role: string;
	setDefaultRole: () => void;
}) => {
	const { register, handleSubmit, reset } = useForm({
		mode: 'onChange',
	});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const onSubmit = (data: any) => {
		data.userType = role;
		setLoading(true);
		registerUser(data)
			.then(() => {
				reset();
			})
			.catch((err) => {
				setError(true);
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<div className='mx-auto max-w-[650px] w-full'>
			<h4 className='text-xl text-center mb-5 font-semibold'>
				Create an account to attend events
			</h4>
			<p>
				Select the wrong role?{' '}
				<button
					onClick={setDefaultRole}
					className='text-blue-500 hover:underline'
				>
					Click here
				</button>
			</p>
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
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='username'
					>
						Username
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='text'
						placeholder='Username'
						{...register('username')}
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='phoneNumber'
					>
						Phone Number
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='tel'
						placeholder='Phone Number'
						{...register('phoneNumber')}
					/>
				</div>
				<div className='flex items-center justify-between gap-5'>
					<button
						className='bg-blue-500 hover:bg-blue-400 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						{loading ? 'Loading...' : 'Sign up'}
					</button>
					<p className='text-sm text-gray-500'>
						Already have an account?{' '}
						<Link href='/login' className='text-blue-500 hover:underline'>
							Login
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default CreateUserForm;
