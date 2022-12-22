import { Button, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Container, padding } from '@mui/system';
import React from 'react';
import styles from '../Program/program.module.css';
import Workouts from '../Program/Workouts';
import WorkoutExercises from './WorkoutExercises';
import WorkoutExerciseForm from '../../components/forms/WorkoutExerciseForm';

const Workout = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.bannerImage}></div>
			<Container>
				<Typography variant='h4'>Workout Name</Typography>
				<Typography variant='body1'>
					Lorem anim reprehenderit mollit veniam laboris duis ea ut. Cillum
					velit proident id commodo elit sint officia mollit ea voluptate.
				</Typography>
				<Typography variant='h4'>Workout Exercises</Typography>
				<WorkoutExercises />
				<div className={styles.btnWrapper}>
					<WorkoutExerciseForm />
				</div>
			</Container>
		</div>
	);
};

export default Workout;
