import { useEffect, useState } from 'react';

const baseUrl = process.env.REACT_APP_BASE_URL;

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const init = async () => {
			try {
				const response = await fetch(baseUrl + url);
				if (response.ok) {
					const json = await response.json();
					setData(json);
				} else {
					throw response;
				}
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		init();
	}, [url]);

	return { data, error, loading };
};

export default useFetch;
