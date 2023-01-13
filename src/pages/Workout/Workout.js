import React from 'react';
import { Container } from '@mui/system';
import WorkoutExercises from './WorkoutExercises';
import AddWorkoutExercise from '../../components/forms/AddWorkoutExercise';
import { useParams } from 'react-router-dom';
import BannerImage from '../../components/common/BannerImage';
import Title from '../../components/common/Title';
import Description from '../../components/common/Description';
import Spinner from '../../components/common/Spinner';
import { getWorkout } from '../../actions/workoutActions';

const Workout = () => {
	const { id } = useParams();
	const { data: workout, loading, error } = getWorkout(id);

	if (error) throw error;
	if (loading) return <Spinner />;

	return (
		<>
			<BannerImage />
			<Container>
				<Title title={workout.name} />
				<Description description={workout.description} />
				<Title title='Workout Exercises' />
				<WorkoutExercises workoutId={id} />
				<AddWorkoutExercise />
			</Container>
		</>
	);
};

export default Workout;
