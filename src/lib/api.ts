import { TEvent } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(API_URL);

async function fetchAPI<T>(
	endpoint: string,
	options: RequestInit = {}
): Promise<T> {
	const res = await fetch(`https://eventful-service.hostless.app${endpoint}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0dGVuZGVlQGV4YW1wbGUuY29tIiwic3ViIjoiNjZiNTRlMzk5MmY3NzI0ZDk1OTdmOTBkIiwidXNlclR5cGUiOiJhdHRlbmRlZSIsImlhdCI6MTcyMzY3MTgwNiwiZXhwIjoxNzIzNzU4MjA2fQ.ck3y7Y2siawtPc0OVEBceg3VEMzjjP7VjDZc3q3rdIg`,
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
	return fetchAPI(`/tickets/buy-ticket`, {
		method: 'POST',
		body: JSON.stringify({ eventId }),
	});
}

export const registerCreator = async (creatorData: any) => {
	return fetchAPI(`register/creator`, {
		method: 'POST',
		body: creatorData,
	});
};

export const registerUser = async (userData: any) => {
	return fetchAPI(`register/attendee`, {
		method: 'POST',
		body: userData,
	});
};
