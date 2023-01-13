import useFetch from '../services/useFetch';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getWorkout = (id) => {
	return useFetch(`api/workouts/get?id=${id}`);
};

export const getWorkoutsByProgramId = (id) => {
	return useFetch(`api/Workouts/GetAllByProgramId?programId=${id}`);
};

export const createWorkout = (workout) => {
	return fetch((baseUrl = 'api/workouts/create'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(workout),
	});
};
