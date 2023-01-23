import useFetch from '../services/useFetch';
const baseUrl = process.env.REACT_APP_BASE_URL;

// Get Programs from server
export const getPrograms = () => {
	return useFetch('api/programs');
};

export const getProgram = (id) => {
	return useFetch(`api/programs/${id}`);
};

export const createProgram = async (program) => {
	return await fetch(baseUrl + 'api/programs/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(program),
	}).then((res) => res.json());
};

export const removeProgram = async (id) => {
	return await fetch(baseUrl + `api/programs/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
