import React from 'react';
import { getExercises } from '../../actions/exerciseActions';
import Spinner from '../../components/common/Spinner';
import ExercisesList from './ExercisesList';

const Exercises = () => {
	const { data: exercises, loading, error } = getExercises();

	if (error) throw error;
	if (loading) return <Spinner />;

	return <ExercisesList exercises={exercises} />;
};

export default Exercises;
