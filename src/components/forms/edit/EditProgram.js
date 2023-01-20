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

const EditProgram = ({ program, editModal, setEditModal }) => {
	const [name, setName] = useState(program.name);
	const [description, setDescription] = useState(program.description);

	const handleOpen = () => {
		setEditModal(true);
	};

	const handleClose = () => {
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
					<Button onClick={handleClose}>Save Changes</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditProgram;
