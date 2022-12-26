import axios from 'axios';

export const getWorkout = async (id) => {
	try {
		const res = await axios.get(
			`https://localhost:7097/Workouts/GetWorkout?id=${id}`
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};

export const getWorkoutsByProgramId = async (id) => {
	try {
		const res = await axios.get(
			`https://localhost:7097/Workouts/GetWorkoutsByProgramId?programId=${id}`
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};

export const createWorkout = async (workout) => {
	try {
		const res = await axios.post(
			`https://localhost:7097/Workouts/CreateWorkout`,
			workout
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};
