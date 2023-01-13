import useFetch from '../services/useFetch';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getWorkoutExercisesByWorkoutId = (id) => {
	return useFetch(`api/WorkoutExercises/GetAll?workoutId=${id}`);
};

export const createWorkoutExercise = (workoutExercise) => {
	return fetch(baseUrl + 'api/WorkoutExercises/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(workoutExercise),
	});
};
