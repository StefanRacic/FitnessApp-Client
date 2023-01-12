import useFetch from '../services/useFetch';

export const getExercises = async () => {
	return useFetch('api/exercises/getAll');
};
