'use client';

import { createEvent } from '@/lib/api';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateEventPage = () => {
	const router = useRouter();
	const { register, handleSubmit, reset } = useForm({
		mode: 'onChange',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const onSubmit = (data: any) => {
		data.creator = '66b54e1392f7724d9597f90b';
		console.log(data);
		setLoading(true);
		createEvent(data)
			.then((res) => {
				console.log(res);
				router.push('/');
				reset();
			})
			.catch((err) => {
				console.log(err);
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<div className='mx-auto max-w-[650px] w-full'>
			<h2 className='text-xl text-center mb-5 font-semibold'>
				Create New Event
			</h2>
			{error && (
				<p className='text-red-500 text-center'>Something went wrong</p>
			)}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-white shadow-md rounded p-8 border'
			>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='name'
					>
						Name
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='text'
						placeholder='Name'
						{...register('name', { required: true })}
					/>
				</div>

				<div className='mb-4'>
					<label
						htmlFor='description'
						className='block text-gray-700 text-sm font-bold mb-2'
					>
						Description
					</label>
					<textarea
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						rows={5}
						placeholder='Description'
						{...register('description', {
							required: true,
						})}
					/>
				</div>
				<div className='grid grid-cols-2 gap-10 mb-4'>
					<div className=''>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='startDate'
						>
							Start Date (YYYY-MM-DD)
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='date'
							placeholder='Start Date (YYYY-MM-DD)'
							{...register('startDate', {
								valueAsDate: true,
								required: true,
							})}
						/>
					</div>
					<div className=''>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='endDate'
						>
							End Date (YYYY-MM-DD)
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='date'
							placeholder='End Date (YYYY-MM-DD)'
							{...register('endDate', {
								valueAsDate: true,
								required: true,
							})}
						/>
					</div>
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
						{...register('location', { required: true })}
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='totalTickets'
					>
						Total Tickets
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='number'
						placeholder='Total Tickets'
						{...register('totalTickets', {
							valueAsNumber: true,
							min: 1,
							required: true,
						})}
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='reminderInterval'
					>
						Reminder Interval
					</label>
					<select
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						{...register('reminderInterval', { required: true })}
					>
						<option disabled>Set Reminder Interval</option>
						<option value={'1d'}>1 day before</option>
						<option value={'2d'}>2 days before</option>
						<option value={'1wk'}>1 week before</option>
					</select>
				</div>
				<div className='flex items-center justify-center gap-5'>
					<button
						className='bg-blue-500 hover:bg-blue-400 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						{loading ? 'Loading...' : 'Create Event'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateEventPage;
