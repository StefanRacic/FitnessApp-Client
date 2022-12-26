import axios from 'axios';

export const getWorkoutExercisesByWorkoutId = async (id) => {
	try {
		const res = await axios.get(
			`https://localhost:7097/WorkoutExercises/GetAllWorkoutExercisesByWorkoutId?workoutId=${id}`
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};
