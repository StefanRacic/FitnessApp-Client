import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import WorkoutExerciseItem from './WorkoutExerciseItem';
import styles from '../Program/workouts.module.css';
import { getWorkoutExercisesByWorkoutId } from '../../actions/workoutExerciseActions';
import Spinner from '../../components/common/Spinner';
import AddWorkoutExercise from '../../components/forms/AddWorkoutExercise';

const WorkoutExercises = ({ workoutId }) => {
	const {
		data: workoutExercises,
		setData: setWorkoutExercises,
		loading,
		error,
	} = getWorkoutExercisesByWorkoutId(workoutId);

	if (error) throw error;
	if (loading) return <Spinner />;

	return (
		<>
			<div className={styles.wrapper}>
				<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
					{workoutExercises.map((workoutExercise) => {
						return (
							<Grid sm={3} key={workoutExercise.id}>
								<WorkoutExerciseItem workoutExercise={workoutExercise} />
							</Grid>
						);
					})}
				</Grid>
			</div>
			<AddWorkoutExercise />
		</>
	);
};

export default WorkoutExercises;
