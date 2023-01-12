import axios from 'axios';

export const getWorkoutExercisesByWorkoutId = async (id) => {
	try {
		const res = await axios.get(
			`https://localhost:7097/api/workoutExercises/GetAllWorkoutExercisesByWorkoutId?workoutId=${id}`
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};

export const createWorkoutExercise = async (workoutExercise) => {
	try {
		const res = await axios.post(
			'https://localhost:7097/api/WorkoutExercises/create',
			workoutExercise
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};
