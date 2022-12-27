import axios from 'axios';

export const getExercises = async () => {
	try {
		const res = await axios.get(
			`https://localhost:7097/Exercises/GetAllExercises`
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};
