import useFetch from '../services/useFetch';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getWorkoutExercisesByWorkoutId = (id) => {
	return useFetch(`api/WorkoutExercises/GetAllByWorkoutId/${id}`);
};

export const createWorkoutExercise = async (workoutExercise) => {
	return await fetch(baseUrl + 'api/workoutExercises/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(workoutExercise),
	}).then((res) => res.json());
};

export const removeWorkoutExercise = async (id) => {
	return await fetch(baseUrl + `api/workoutExercises/remove?id=${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
