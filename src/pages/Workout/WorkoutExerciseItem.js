import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './workoutExerciseItem.module.css';
import ItemOptions from '../../components/options/ItemOptions';
import { removeWorkoutExercise } from '../../actions/workoutExerciseActions';

export default function WorkoutExerciseItem({
	workoutExercise,
	setWorkoutExercises,
}) {
	return (
		<Card sx={{ minWidth: 275 }} className={styles.wrapper}>
			<CardContent>
				<Typography variant='body2' component='div'>
					{workoutExercise.exerciseName}
				</Typography>
				<Typography variant='body2'>Sets: {workoutExercise.sets}</Typography>
			</CardContent>
			<CardActions>
				<ItemOptions
					item={workoutExercise}
					removeItem={removeWorkoutExercise}
					setItems={setWorkoutExercises}
				/>
			</CardActions>
		</Card>
	);
}
