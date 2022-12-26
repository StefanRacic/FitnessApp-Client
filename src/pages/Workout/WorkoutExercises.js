import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import WorkoutExerciseItem from './WorkoutExerciseItem';
import styles from '../Program/workouts.module.css';

const WorkoutExercises = ({ workoutExercises }) => {
	return (
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
	);
};

export default WorkoutExercises;
