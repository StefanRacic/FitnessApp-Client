import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ItemOptions from '../../components/options/ItemOptions';
import { removeWorkout } from '../../actions/workoutActions';

export default function WorkoutItem({ workout, setWorkouts }) {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					Workout ID: {workout.id}
				</Typography>
				<Typography variant='h5' component='div'>
					{workout.name}
				</Typography>
				<Typography variant='body2'>{workout.description}</Typography>
			</CardContent>
			<CardActions style={{ justifyContent: 'space-around' }}>
				<Button
					size='small'
					component={Link}
					to={{
						pathname: `/workout/${workout.id}`,
					}}
				>
					Open
				</Button>
				<ItemOptions
					item={workout}
					removeItem={removeWorkout}
					setItems={setWorkouts}
				/>
			</CardActions>
		</Card>
	);
}
