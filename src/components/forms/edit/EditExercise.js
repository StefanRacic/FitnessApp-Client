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
import { updateExercise } from '../../../actions/exerciseActions';

const EditExercise = ({ exercise, editModal, setEditModal, setExercises }) => {
	const [name, setName] = useState(exercise.name);
	const [description, setDescription] = useState(exercise.description);

	const handleClose = () => {
		setEditModal(false);
		setName(exercise.name);
		setDescription(exercise.description);
	};

	const onSubmit = async () => {
		if (name !== '' || description !== '') {
			handleClose();
		} else {
			const updatedExercise = {
				id: exercise.id,
				name,
				description,
			};

			const res = await updateExercise(updatedExercise);
			setExercises((curr) =>
				curr.map((item) => (item.id === exercise.id ? res : item))
			);

			setName(name);
			setDescription(description);

			setEditModal(false);
		}
	};

	return (
		<div>
			<Dialog open={editModal} onClose={handleClose}>
				<DialogTitle>Edit Exercise</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Edit Name and Description for current exercise.
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
					<Button onClick={onSubmit}>Save Changes</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditExercise;
