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
import { updateWorkout } from '../../../actions/workoutActions';

const EditWorkout = ({ workout, editModal, setEditModal, setWorkouts }) => {
	const [name, setName] = useState(workout.name);
	const [description, setDescription] = useState(workout.description);

	const handleOpen = () => {
		setEditModal(true);
	};

	const handleClose = () => {
		setEditModal(false);
	};

	const onSubmit = async () => {
		const updatedWorkout = {
			name,
			description,
		};

		const res = await updateWorkout(workout.id, updatedWorkout);

		setWorkouts((curr) =>
			curr.map((item) => (item.id === workout.id ? res : item))
		);

		setName('');
		setDescription('');
		setEditModal(false);
	};

	return (
		<div>
			<Dialog open={editModal} onClose={handleClose}>
				<DialogTitle>Edit Program</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Edit Name and Description for current program.
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						name='name'
						value={name}
						label='Name'
						type='text'
						fullWidth
						variant='standard'
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						autoFocus
						margin='dense'
						id='description'
						name='description'
						value={description}
						label='Description'
						type='text'
						fullWidth
						variant='standard'
						onChange={(e) => setDescription(e.target.value)}
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

export default EditWorkout;
