'use client';

import EventCard from '@/components/EventCard';
import { getEvents } from '@/lib/api';
import { TEvent } from '@/types';
import { useEffect, useState } from 'react';

export default function Home() {
	const [event, setEvent] = useState<TEvent[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [token, setToken] = useState<string>();

	useEffect(() => {
		setToken(localStorage.getItem('token') || '');
		getEvents()
			.then((res) => {
				setEvent(res);
				setLoading(false);
			})
			.catch((err) => {
				setError(true);
				setLoading(false);
			});
	}, []);

	return (
		<div className='space-y-4 flex flex-col items-center'>
			<h2 className='text-3xl font-semibold'>Welcome to Eventful</h2>
			<p>Discover unforgettable moments with your friends and family</p>
			{loading && <div>Loading...</div>}
			{error && token && <div>Error</div>}
			<div className='flex flex-col items-center'>
				{token ? (
					event.length > 0 ? (
						<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
							{event.map((item) => (
								<EventCard key={item.id} event={item} />
							))}
						</div>
					) : (
						<div>No events found</div>
					)
				) : (
					<div className=''>Please login to view events</div>
				)}
			</div>
		</div>
	);
}
