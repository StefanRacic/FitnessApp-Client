import useFetch from '../services/useFetch';
const baseUrl = process.env.REACT_APP_BASE_URL;

// Get Programs from server
export const getPrograms = () => {
	return useFetch('api/programs/getAll');
};

export const getProgram = (id) => {
	return useFetch(`api/programs/get?id=${id}`);
};

export const createProgram = (program) => {
	return fetch(baseUrl + 'api/programs/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(program),
	});
};
