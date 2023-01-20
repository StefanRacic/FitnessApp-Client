import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddButton from './AddButton';
import ExercisesSelect from './ExercisesSelect';
import { createWorkoutExercise } from '../../actions/workoutExerciseActions';
import { useParams } from 'react-router-dom';
import { getExercises } from '../../actions/exerciseActions';

export default function AddWorkoutExercise({ setWorkoutExercises }) {
	const params = useParams();
	const { data: exercises, loading, error } = getExercises();
	const [exerciseId, setExerciseId] = useState('');
	const [sets, setSets] = useState('');
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const onSubmit = async () => {
		const newWorkoutExercise = {
			exerciseId,
			sets,
			workoutId: params.id,
		};
		const res = await createWorkoutExercise(newWorkoutExercise);
		setWorkoutExercises((current) => [...current, res]);
		setExerciseId('');
		setSets('');
		setOpen(false);
	};

	return (
		<div>
			<AddButton handleClickOpen={handleClickOpen} />
			<Dialog open={open} onClose={handleClose} fullWidth={true}>
				<DialogTitle>Create Exercise</DialogTitle>
				<DialogContent>
					<DialogContentText>Lorem ipsum dolar sit.</DialogContentText>
					<ExercisesSelect
						loading={loading}
						error={error}
						exercises={exercises}
						setExerciseId={setExerciseId}
					/>
					<TextField
						margin='dense'
						id='sets'
						name='sets'
						value={sets}
						label='Sets'
						type='number'
						fullWidth
						variant='standard'
						onChange={(e) => {
							setSets(e.target.value);
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={onSubmit}>Create Workout Exercise</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
