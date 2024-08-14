import { useRouter } from 'next/router';
import React from 'react';

export const useAuth = () => {
	const router = useRouter();

	React.useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			router.push('/dashboard');
		}
	}, [router]);
};
