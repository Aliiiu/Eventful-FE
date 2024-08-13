export interface TEvent {
	id: string;
	title: string;
	description: string;
	date: string;
	location: string;
	creatorId: string;
}

export interface User {
	id: string;
	name: string;
	email: string;
	avatar: string;
}

export interface Ticket {
	id: string;
	eventId: string;
	userId: string;
	status: string;
}

export interface Analytics {
	id: string;
	eventId: string;
	userId: string;
	timestamp: string;
	ip: string;
}

export interface NotificationString {
	id: string;
	type: string;
	message: string;
	createdAt: string;
}
