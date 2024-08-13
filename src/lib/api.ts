import { TEvent } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchAPI<T>(
	endpoint: string,
	options: RequestInit = {}
): Promise<T> {
	const res = await fetch(`${API_URL}${endpoint}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options.headers,
		},
	});

	if (!res.ok) {
		throw new Error(`API error: ${res.status}`);
	}

	return res.json();
}

export async function getEvents(): Promise<TEvent[]> {
	return fetchAPI('/events');
}

export async function getEvent(id: string): Promise<TEvent> {
	return fetchAPI(`/events/${id}`);
}

export async function createEvent(event: TEvent): Promise<TEvent> {
	return fetchAPI('/events', {
		method: 'POST',
		body: JSON.stringify(event),
	});
}

export async function updateEvent(event: TEvent): Promise<TEvent> {
	return fetchAPI(`/events/${event.id}`, {
		method: 'PUT',
		body: JSON.stringify(event),
	});
}

export async function buyTicket(eventId: string): Promise<TEvent> {
	return fetchAPI(`/events/${eventId}/tickets`, {
		method: 'POST',
	});
}
