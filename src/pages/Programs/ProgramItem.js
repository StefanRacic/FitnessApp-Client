import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProgramImagePlaceHolder from '../../assets/images/placeholders/program-placeholder.jpg';
import { Link } from 'react-router-dom';

export default function ProgramItem() {
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
					Program Name
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Magna duis voluptate tempor excepteur id mollit cupidatat ex sunt ut.
					Sint enim aute sit non minim elit. Sint duis proident cupidatat ea
					occaecat id adipisicing nostrud nisi excepteur reprehenderit duis
					consectetur ullamco.
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Start</Button>
				<Button size='small' component={Link} to='/program'>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
