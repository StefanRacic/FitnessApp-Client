import axios from 'axios';
import useFetch from '../services/useFetch';

// Get Programs from server
export const getPrograms = () => {
	return useFetch('Programs/GetAllPrograms');
};

export const getProgram = async (id) => {
	try {
		const res = await axios.get(
			`https://localhost:7097/Programs/GetProgram?id=${id}`
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};

export const createProgram = async (program) => {
	try {
		const res = await axios.post(
			`https://localhost:7097/Programs/CreateProgram`,
			program
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};
