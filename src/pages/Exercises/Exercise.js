import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Exercise({ exercise }) {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					{exercise.id} #
				</Typography>
				<Typography variant='h5' component='div'>
					{exercise.name}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color='text.secondary'>
					adjective
				</Typography>
				<Typography variant='body2'>{exercise.description}</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
}
