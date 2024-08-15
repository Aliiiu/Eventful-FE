import { TEvent } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchAPI<T>(
	endpoint: string,
	options: RequestInit = {}
): Promise<T> {
	let token = localStorage.getItem('token');

	const res = await fetch(`https://eventful-service.hostless.app${endpoint}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
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
	return fetchAPI(`/auth/register/creator`, {
		method: 'POST',
		body: JSON.stringify(creatorData),
	});
};

export const registerUser = async (userData: any) => {
	return fetchAPI(`/auth/register/attendee`, {
		method: 'POST',
		body: JSON.stringify(userData),
	});
};

export const loginUser = async (
	loginData: any
): Promise<{ accessToken: string }> => {
	return fetchAPI(`/auth/login`, {
		method: 'POST',
		body: JSON.stringify(loginData),
	});
};
