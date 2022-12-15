import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Exercise() {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					Exercise ID
				</Typography>
				<Typography variant='h5' component='div'>
					Exercise Name
				</Typography>
				<Typography sx={{ mb: 1.5 }} color='text.secondary'>
					adjective
				</Typography>
				<Typography variant='body2'>
					Voluptate fugiat esse do ipsum deserunt laborum id excepteur sunt
					aliquip magna aliqua.
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
}
