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
