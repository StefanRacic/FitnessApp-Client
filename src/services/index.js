import axios from 'axios';

export const getPrograms = () => {
	return axios.get('https://localhost:7097/Programs/GetAllPrograms');
};

export const getExercies = () => {
	return axios.get('https://localhost:7097/Exercises/GetAllExercises');
};
