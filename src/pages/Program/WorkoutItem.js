import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function WorkoutItem() {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					Workout ID
				</Typography>
				<Typography variant='h5' component='div'>
					Workout Name
				</Typography>
				<Typography variant='body2'>
					Voluptate fugiat esse do ipsum deserunt laborum id excepteur sunt
					aliquip magna aliqua.
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small' component={Link} to='/workout'>
					Open
				</Button>
			</CardActions>
		</Card>
	);
}
