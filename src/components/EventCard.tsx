import { TEvent } from '@/types';
import Link from 'next/link';
import React from 'react';

interface EventCardProps {
	event: TEvent;
}
const EventCard = ({ event }: EventCardProps) => {
	return (
		<Link
			href={`/events/${event.id}`}
			className='border rounded-lg p-4 shadow-md'
		>
			<h2 className='text-xl font-bold'>{event.name}</h2>
			<p className='text-sm'>{event.description}</p>
			<p className='text-sm text-gray-500'>
				{new Date(event.startDate).toLocaleDateString() +
					' - ' +
					new Date(event.endDate).toLocaleDateString()}
			</p>
			<p className='text-sm'>{event.location}</p>
		</Link>
	);
};

export default EventCard;
