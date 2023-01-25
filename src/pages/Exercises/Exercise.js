import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExerciseImagePlaceHolder from '../../assets/images/placeholders/exercisePlacehodler.gif';
import ItemOptions from '../../components/options/ItemOptions';
import { removeExercise } from '../../actions/exerciseActions';
import EditExercise from '../../components/forms/edit/EditExercise';

const Exercise = ({ exercise, setExercises }) => {
	const [editModal, setEditModal] = useState(false);
	return (
		<>
			<Card sx={{ minWidth: 275 }}>
				<CardMedia
					component='img'
					height='100%'
					image={ExerciseImagePlaceHolder}
					alt='program'
				/>
				<CardContent
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div>
						<Typography
							sx={{ fontSize: 14 }}
							color='text.secondary'
							gutterBottom
						>
							Exercise ID: {exercise.id}
						</Typography>
						<Typography variant='h5' component='div'>
							{exercise.name}
						</Typography>
						<Typography sx={{ mb: 1.5 }} color='text.secondary'>
							adjective
						</Typography>
						<Typography variant='body2'>{exercise.description}</Typography>
					</div>
					<div>
						<ItemOptions
							item={exercise}
							setEditModal={setEditModal}
							removeItem={removeExercise}
							setItems={setExercises}
						/>
					</div>
				</CardContent>
			</Card>
			<EditExercise
				exercise={exercise}
				editModal={editModal}
				setEditModal={setEditModal}
				setExercises={setExercises}
			/>
		</>
	);
};

export default Exercise;
