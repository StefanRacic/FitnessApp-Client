import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container } from '@mui/system';
import React from 'react';
import WorkoutItem from './WorkoutItem';
import styles from './workouts.module.css';

const Workouts = () => {
	return (
		<div className={styles.wrapper}>
			<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
				<Grid sm={3}>
					<WorkoutItem />
				</Grid>
				<Grid sm={3}>
					<WorkoutItem />
				</Grid>
				<Grid sm={3}>
					<WorkoutItem />
				</Grid>
				<Grid sm={3}>
					<WorkoutItem />
				</Grid>
			</Grid>
		</div>
	);
};

export default Workouts;
