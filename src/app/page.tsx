'use client';

import EventCard from '@/components/EventCard';
import { getEvents } from '@/lib/api';
import { TEvent } from '@/types';
import { use, useEffect, useState } from 'react';

export default function Home() {
	const [event, setEvent] = useState<TEvent[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
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

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error</div>;
	}

	return (
		<div className='space-y-4 flex flex-col items-center'>
			<h2 className='text-3xl font-semibold'>Welcome to Eventful</h2>
			<p>Discover unforgettable moments with your friends and family</p>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{event.length > 0 ? (
					event.map((item) => <EventCard key={item.id} event={item} />)
				) : (
					<div>No events found</div>
				)}
			</div>
		</div>
	);
}
