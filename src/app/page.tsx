import EventCard from '@/components/EventCard';
import { getEvents } from '@/lib/api';
import { TEvent } from '@/types';

export default async function Home() {
	const event: TEvent[] = await getEvents();
	return (
		<div className='space-y-4'>
			<h2>Welcome to Eventful</h2>
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
