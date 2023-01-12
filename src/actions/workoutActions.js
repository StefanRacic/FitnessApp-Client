import axios from 'axios';
import useFetch from '../services/useFetch';

export const getWorkout = async (id) => {
	try {
		const res = await axios.get(
			`https://localhost:7097/api/workouts/get?id=${id}`
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};

export const getWorkoutsByProgramId = (id) => {
	return useFetch(`api/Workouts/GetAllByProgramId?programId=${id}`);
};

export const createWorkout = async (workout) => {
	try {
		const res = await axios.post(
			`https://localhost:7097//api/workouts/Create`,
			workout
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};
