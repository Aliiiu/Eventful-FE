import { registerCreator } from '@/lib/api';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const CreatorForm = ({
	role,
	setDefaultRole,
}: {
	role: string;
	setDefaultRole: () => void;
}) => {
	const { register, handleSubmit, reset } = useForm({
		mode: 'onChange',
	});

	const onSubmit = (data: any) => {
		data.userType = role;
		console.log(data);
		registerCreator(data);
		reset();
	};
	return (
		<div className='mx-auto max-w-[650px] w-full'>
			<h4 className='text-xl text-center mb-5 font-semibold'>
				Are you looking to create events?
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
						htmlFor='OrganizationName'
					>
						Organization Name
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='text'
						placeholder='Organization Name'
						{...register('organizationName')}
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='location'
					>
						Location
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='text'
						placeholder='Location'
						{...register('location')}
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='organizationWebsite'
					>
						Organization Website
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='url'
						placeholder='Organization Website'
						{...register('organizationWebsite')}
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='organizationDescription'
						className='block text-gray-700 text-sm font-bold mb-2'
					>
						Organization Description
					</label>
					<textarea
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						rows={5}
						placeholder='Organization Description'
						{...register('organizationDescription')}
					/>
				</div>
				<div className='flex items-center justify-between gap-5'>
					<button
						className='bg-blue-500 hover:bg-blue-400 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						Sign up
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

export default CreatorForm;
