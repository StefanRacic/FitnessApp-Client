import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container } from '@mui/system';
import React from 'react';
import WorkoutItem from './WorkoutItem';
import styles from './workouts.module.css';
import { Typography } from '@mui/material';
import { getWorkoutsByProgramId } from '../../actions/workoutActions';
import Spinner from '../../components/common/Spinner';
import AddWorkout from '../../components/forms/add/AddWorkout';

const Workouts = ({ programId }) => {
	const {
		data: workouts,
		setData: setWorkouts,
		loading,
		error,
	} = getWorkoutsByProgramId(programId);

	if (error) throw error;
	if (loading) return <Spinner />;

	return (
		<>
			<div className={styles.wrapper}>
				<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
					{workouts.length ? (
						workouts.map((workout) => {
							return (
								<Grid sm={3}>
									<WorkoutItem workout={workout} setWorkouts={setWorkouts} />
								</Grid>
							);
						})
					) : (
						<Typography variant='body1'>No workouts...</Typography>
					)}
				</Grid>
			</div>
			<AddWorkout setWorkouts={setWorkouts} />
		</>
	);
};

export default Workouts;
