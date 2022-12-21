import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import WorkoutExerciseOptions from './WorkoutExerciseItemOptions';
import styles from './workoutExerciseItem.module.css';

export default function WorkoutExerciseItem() {
	return (
		<Card sx={{ minWidth: 275 }} className={styles.wrapper}>
			<CardContent>
				<Typography variant='body2' component='div'>
					Exercise Name
				</Typography>
				<Typography variant='body2'>Sets: 12</Typography>
			</CardContent>
			<CardActions>
				<WorkoutExerciseOptions />
			</CardActions>
		</Card>
	);
}
