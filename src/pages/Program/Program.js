import { Button, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Container, padding } from '@mui/system';
import React from 'react';
import styles from './program.module.css';
import Workouts from './Workouts';
import WorkoutForm from '../../components/forms/WorkoutForm';

const Program = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.bannerImage}></div>
			<Container>
				<Typography variant='h4'>Program Name</Typography>
				<Typography variant='body1'>
					Lorem anim reprehenderit mollit veniam laboris duis ea ut. Cillum
					velit proident id commodo elit sint officia mollit ea voluptate. Et
					est excepteur velit duis esse elit tempor labore. Nisi nulla ea sit
					Lorem elit cupidatat duis duis elit exercitation.
				</Typography>
				<Typography variant='h4'>Workouts</Typography>
				<Workouts />
				<div className={styles.btnWrapper}>
					<WorkoutForm />
				</div>
			</Container>
		</div>
	);
};

export default Program;
