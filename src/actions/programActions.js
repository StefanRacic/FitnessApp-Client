import axios from 'axios';

// Get Programs from server
export const getPrograms = async () => {
	try {
		const res = await axios.get(
			'https://localhost:7097/Programs/GetAllPrograms'
		);
		return res.data;
	} catch (err) {
		console.error(err.message);
	}
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
