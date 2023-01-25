import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddButton from './AddButton';
import ExercisesSelect from '../common/ExercisesSelect';
import { createWorkoutExercise } from '../../../actions/workoutExerciseActions';
import { useParams } from 'react-router-dom';
import { getExercises } from '../../../actions/exerciseActions';
import Spinner from '../../common/Spinner';

const AddWorkoutExercise = ({ setWorkoutExercises }) => {
	const params = useParams();
	const { data: exercises, loading, error } = getExercises();
	const [exerciseId, setExerciseId] = useState('');
	const [sets, setSets] = useState('');
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setSets('');
		setOpen(false);
	};

	const onSubmit = async () => {
		if (sets <= 0) {
			handleClose();
		} else {
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
		}
	};

	if (error) throw error;
	if (loading) return <Spinner />;

	return (
		<div>
			<AddButton handleClickOpen={handleClickOpen} />
			<Dialog open={open} onClose={handleClose} fullWidth={true}>
				<DialogTitle>Create Exercise</DialogTitle>
				<DialogContent>
					<DialogContentText>Lorem ipsum dolar sit.</DialogContentText>
					<ExercisesSelect
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
					<Button onClick={onSubmit}>Create Workout Exercise</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AddWorkoutExercise;
