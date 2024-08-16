'use client';

import CreateUserForm from '@/components/CreateUserForm';
import CreatorForm from '@/components/CreatorForm';
import { useState } from 'react';

export default function Register() {
	const [selectRole, setSelectRole] = useState(null);

	const handleRole = (role: any) => {
		console.log(role);
		setSelectRole(role);
	};

	const setDefaultRole = () => {
		setSelectRole(null);
	};

	return (
		<>
			{selectRole === 'creator' ? (
				<CreatorForm role={selectRole} setDefaultRole={setDefaultRole} />
			) : selectRole === 'attendee' ? (
				<CreateUserForm role={selectRole} setDefaultRole={setDefaultRole} />
			) : (
				<div className='grid grid-cols-2 gap-10'>
					<button
						onClick={() => handleRole('creator')}
						className='border rounded-md flex flex-col p-20'
					>
						<h2 className='text-xl font-semibold'>Are you a creator</h2>
						<p>Lets help you bring your event to life</p>
					</button>
					<button
						onClick={() => handleRole('attendee')}
						className='border rounded-md flex flex-col p-20'
					>
						<h2 className='text-xl font-semibold'>Are you an attendee</h2>
						<p>Connect with like minds</p>
					</button>
				</div>
			)}
		</>
	);
}
