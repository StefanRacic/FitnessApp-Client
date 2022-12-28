import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react';
import styles from '../Program/program.module.css';
import WorkoutExercises from './WorkoutExercises';
import WorkoutExerciseForm from '../../components/forms/WorkoutExerciseForm';
import { getWorkout } from '../../actions/workoutActions';
import { useParams } from 'react-router-dom';
import { getWorkoutExercisesByWorkoutId } from '../../actions/workoutExerciseActions';
import BannerImage from '../../components/common/BannerImage';
import Title from '../../components/common/Title';
import Description from '../../components/common/Description';

const Workout = () => {
	const params = useParams();
	const [workout, setWorkout] = useState({});
	const [workoutExercises, setWorkoutExercises] = useState([]);
	const runGetWorkout = async () => {
		const res = await getWorkout(params.id);
		setWorkout(res);
	};
	const runGetWorkoutExercises = async () => {
		const res = await getWorkoutExercisesByWorkoutId(params.id);
		setWorkoutExercises(res);
	};
	useEffect(() => {
		runGetWorkout();
		runGetWorkoutExercises();
	}, []);
	return (
		<Fragment>
			<BannerImage />
			<Container>
				<Title title={workout.name} />
				<Description description={workout.description} />
				<Title title='Workout Exercises' />
				<WorkoutExercises workoutExercises={workoutExercises} />
				<WorkoutExerciseForm runGetWorkoutExercises={runGetWorkoutExercises} />
			</Container>
		</Fragment>
	);
};

export default Workout;
