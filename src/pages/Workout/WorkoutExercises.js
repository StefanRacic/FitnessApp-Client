import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import WorkoutExerciseItem from './WorkoutExerciseItem';
import styles from '../Program/workouts.module.css';

const WorkoutExercises = () => {
	return (
		<div className={styles.wrapper}>
			<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
				<Grid sm={3}>
					<WorkoutExerciseItem />
				</Grid>
				<Grid sm={3}>
					<WorkoutExerciseItem />
				</Grid>
				<Grid sm={3}>
					<WorkoutExerciseItem />
				</Grid>
				<Grid sm={3}>
					<WorkoutExerciseItem />
				</Grid>
			</Grid>
		</div>
	);
};

export default WorkoutExercises;
