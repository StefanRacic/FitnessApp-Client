import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './workoutExerciseItem.module.css';
import ItemOptions from '../../components/options/ItemOptions';

export default function WorkoutExerciseItem({ workoutExercise }) {
	return (
		<Card sx={{ minWidth: 275 }} className={styles.wrapper}>
			<CardContent>
				<Typography variant='body2' component='div'>
					{workoutExercise.exerciseName}
				</Typography>
				<Typography variant='body2'>Sets: {workoutExercise.sets}</Typography>
			</CardContent>
			<CardActions>
				<ItemOptions />
			</CardActions>
		</Card>
	);
}
