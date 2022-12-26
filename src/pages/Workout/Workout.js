import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import styles from '../Program/program.module.css';
import WorkoutExercises from './WorkoutExercises';
import WorkoutExerciseForm from '../../components/forms/WorkoutExerciseForm';
import { getWorkout } from '../../actions/workoutActions';
import { useParams } from 'react-router-dom';
import { getWorkoutExercisesByWorkoutId } from '../../actions/workoutExerciseActions';

const Workout = () => {
	const params = useParams();
	const [workout, setWorkout] = useState({});
	const [workoutExercises, setWorkoutExercises] = useState([]);

	useEffect(() => {
		const runGetWorkout = async () => {
			const res = await getWorkout(params.id);
			setWorkout(res);
		};
		const runGetWorkoutExercises = async () => {
			const res = await getWorkoutExercisesByWorkoutId(params.id);
			setWorkoutExercises(res);
		};
		runGetWorkout();
		runGetWorkoutExercises();
	}, []);
	return (
		<div className={styles.wrapper}>
			<div className={styles.bannerImage}></div>
			<Container>
				<Typography variant='h4'>{workout.name}</Typography>
				<Typography variant='body1'>{workout.description}</Typography>
				<Typography variant='h4'>Workout Exercises</Typography>
				<WorkoutExercises workoutExercises={workoutExercises} />
				<div className={styles.btnWrapper}>
					<WorkoutExerciseForm />
				</div>
			</Container>
		</div>
	);
};

export default Workout;
