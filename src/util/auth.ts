import { useRouter } from 'next/router';
import React from 'react';
import { NextApiResponse } from 'next';

export const useAuth = () => {
	const router = useRouter();

	React.useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			router.push('/dashboard');
		}
	}, [router]);
};

export const setTokenCookie = (res: NextApiResponse, token: string) => {
	res.setHeader(
		'Set-Cookie',
		`token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`
	);
};
