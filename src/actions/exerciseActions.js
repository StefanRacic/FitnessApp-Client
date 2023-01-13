import useFetch from '../services/useFetch';

export const getExercises = () => {
	return useFetch('api/exercises/getAll');
};
