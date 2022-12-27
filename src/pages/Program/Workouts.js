import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container } from '@mui/system';
import React from 'react';
import WorkoutItem from './WorkoutItem';
import styles from './workouts.module.css';
import { Typography } from '@mui/material';

const Workouts = ({ workouts }) => {
	return (
		<div className={styles.wrapper}>
			<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
				{workouts.length ? (
					workouts.map((workout) => {
						return (
							<Grid sm={3}>
								<WorkoutItem workout={workout} />
							</Grid>
						);
					})
				) : (
					<Typography variant='body1'>No workouts...</Typography>
				)}
			</Grid>
		</div>
	);
};

export default Workouts;