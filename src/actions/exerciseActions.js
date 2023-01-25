import useFetch from '../services/useFetch';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getExercises = () => {
	return useFetch('api/exercises/');
};

export const createExercise = async (exercise) => {
	return await fetch(baseUrl + 'api/exercises/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(exercise),
	}).then((res) => res.json());
};

export const removeExercise = async (id) => {
	return await fetch(baseUrl + `api/exercises/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const updateExercise = async (id, model) => {
	return await fetch(baseUrl + `api/exercises/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(model),
	}).then((res) => res.json());
};
