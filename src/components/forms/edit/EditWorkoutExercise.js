import React, { useState } from 'react';
import {
	TextField,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { updateWorkoutExercise } from '../../../actions/workoutExerciseActions';

const EditWorkoutExercise = ({
	workoutExercise,
	editModal,
	setEditModal,
	setWorkoutExercises,
}) => {
	const [sets, setSets] = useState(workoutExercise.sets);

	const handleOpen = () => {
		setEditModal(true);
	};

	const handleClose = () => {
		setEditModal(false);
	};

	const onSubmit = async () => {
		const updatedWorkoutExercise = {
			sets,
		};

		const res = await updateWorkoutExercise(
			workoutExercise.id,
			updatedWorkoutExercise
		);

		setWorkoutExercises((curr) =>
			curr.map((item) => (item.id === workoutExercise.id ? res : item))
		);

		setSets(null);
		setEditModal(false);
	};

	return (
		<div>
			<Dialog open={editModal} onClose={handleClose}>
				<DialogTitle>Edit Workout Exercise</DialogTitle>
				<DialogContent>
					<DialogContentText>Edit Workout Exercise.</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='sets'
						name='sets'
						value={sets}
						label='Sets'
						type='number'
						fullWidth
						variant='standard'
						onChange={(e) => setSets(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={onSubmit}>Save Changes</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditWorkoutExercise;
