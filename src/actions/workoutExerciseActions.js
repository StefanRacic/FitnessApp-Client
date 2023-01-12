import axios from 'axios';
import useFetch from '../services/useFetch';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getWorkoutExercisesByWorkoutId = async (id) => {
	return useFetch(
		`api/workoutExercises/GetAllWorkoutExercisesByWorkoutId?workoutId=${id}`
	);
};

export const createWorkoutExercise = async (workoutExercise) => {
	return fetch(baseUrl + 'api/WorkoutExercises/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(workoutExercise),
	});
};
