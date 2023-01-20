import useFetch from '../services/useFetch';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getExercises = () => {
	return useFetch('api/exercises/getAll');
};

export const createExercise = async (exercise) => {
	return await fetch(baseUrl + 'api/exercises/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(exercise),
	}).then((res) => res.json());
};

export const removeExercise = async (id) => {
	return await fetch(baseUrl + `api/exercises/remove?id=${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
