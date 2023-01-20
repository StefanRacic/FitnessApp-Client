import React from 'react';
import { Container } from '@mui/system';
import WorkoutExercises from './WorkoutExercises';
import { useParams } from 'react-router-dom';
import BannerImage from '../../components/common/BannerImage';
import Title from '../../components/common/Title';
import Description from '../../components/common/Description';
import Spinner from '../../components/common/Spinner';
import { getWorkout } from '../../actions/workoutActions';
import ImagePlaceholder from '../../assets/images/placeholders/program-placeholder.jpg';

const Workout = () => {
	const { id } = useParams();
	const { data: workout, loading, error } = getWorkout(id);

	if (error) throw error;
	if (loading) return <Spinner />;

	return (
		<>
			<BannerImage image={ImagePlaceholder} />
			<Container>
				<Title title={workout.name} />
				<Description description={workout.description} />
				<Title title='Workout Exercises' />
				<WorkoutExercises workoutId={id} />
			</Container>
		</>
	);
};

export default Workout;
