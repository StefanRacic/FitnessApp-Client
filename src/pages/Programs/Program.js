import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProgramImagePlaceHolder from '../../assets/images/placeholders/program-placeholder.jpg';

export default function Program({ program }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component='img'
				height='150'
				image={ProgramImagePlaceHolder}
				alt='program'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{program.name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{program.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Start</Button>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
}
