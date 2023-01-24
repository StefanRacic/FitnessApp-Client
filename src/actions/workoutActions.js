import useFetch from '../services/useFetch';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getWorkout = (id) => {
	return useFetch(`api/workouts/${id}`);
};

export const getWorkoutsByProgramId = (id) => {
	return useFetch(`api/programs/${id}/workouts`);
};

export const createWorkout = async (workout) => {
	return await fetch(baseUrl + 'api/workouts/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(workout),
	}).then((res) => res.json());
};

export const removeWorkout = async (id) => {
	return await fetch(baseUrl + `api/workouts/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
