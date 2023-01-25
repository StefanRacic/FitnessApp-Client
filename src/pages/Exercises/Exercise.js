import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemOptions from '../../components/options/ItemOptions';
import { removeExercise } from '../../actions/exerciseActions';
import EditExercise from '../../components/forms/edit/EditExercise';
import styles from './exercises.module.css';

const Exercise = ({ exercise, setExercises }) => {
	const [editModal, setEditModal] = useState(false);
	return (
		<>
			<Card sx={{ minWidth: 275 }}>
				<CardContent
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div>
						<Typography variant='body2' component='h1'>
							{exercise.name}
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
