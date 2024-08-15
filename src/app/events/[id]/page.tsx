'use client';

import { buyTicket, getEvent } from '@/lib/api';
import { TEvent } from '@/types';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from 'react-share';

export default function EventDetailsPage() {
	const pathname = usePathname();
	const [event, setEvent] = useState<TEvent>();
	const [loading, setLoading] = useState(true);
	const [buyTicketLoading, setBuyTicketLoading] = useState(false);
	const [error, setError] = useState(false);
	const [buyTicketError, setBuyTicketError] = useState(false);
	const [qrCode, setQrCode] = useState<string>();

	useEffect(() => {
		getEvent(pathname.split('/')[2])
			.then((res) => {
				setEvent(res);
				setLoading(false);
			})
			.catch((err) => {
				setError(true);
				setLoading(false);
			});
	}, []);

	const handleBuyTicket = async () => {
		if (!event) return;
		setBuyTicketLoading(true);
		try {
			const res = await buyTicket(event.id);
			setQrCode(res.qrCode);
			// console.log(res);
		} catch (err) {
			console.log(err);
			setBuyTicketError(true);
		} finally {
			setBuyTicketLoading(false);
		}
	};

	const shareUrl = `https://eventful.vercel.app/events/${
		pathname.split('/')[2]
	}`;
	const title = 'Check out this event!';
	return (
		<div className='flex flex-col items-start w-full'>
			{loading ? <div>Loading...</div> : null}
			{error ? <div>Error</div> : null}
			{event ? (
				<div className='space-y-2'>
					<h2 className='text-3xl font-semibold'>{event.name}</h2>
					<p>{event.description}</p>
					<p>
						{new Date(event.startDate).toLocaleDateString() +
							' - ' +
							new Date(event.endDate).toLocaleDateString()}
					</p>
					<div className='flex space-x-2'>
						<WhatsappShareButton url={shareUrl} title={title}>
							{' '}
							<WhatsappIcon size={32} round />{' '}
						</WhatsappShareButton>
						<TwitterShareButton url={shareUrl} title={title}>
							<TwitterIcon size={32} round />
						</TwitterShareButton>
					</div>
					<button
						onClick={handleBuyTicket}
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					>
						{buyTicketLoading ? 'Loading...' : 'Buy Ticket'}
					</button>
				</div>
			) : null}
			{buyTicketError ? <div>Error buying ticket</div> : null}
			{qrCode ? (
				<div className='flex flex-col items-center justify-center'>
					<Image
						src={qrCode}
						alt='QR Code'
						className='w-96 h-96'
						width={256}
						height={256}
					/>
					<p className='text-center text-sm text-gray-500'>
						Scan this QR code with your phone to attend the event
					</p>
				</div>
			) : null}
		</div>
	);
}
