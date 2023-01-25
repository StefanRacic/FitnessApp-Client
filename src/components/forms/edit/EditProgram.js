import React, { useEffect, useState } from 'react';
import {
	TextField,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { updateProgram } from '../../../actions/programActions';

const EditProgram = ({ program, editModal, setEditModal, setPrograms }) => {
	const [name, setName] = useState(program.name);
	const [description, setDescription] = useState(program.description);

	const handleClose = () => {
		setEditModal(false);
		setName(program.name);
		setDescription(program.description);
	};

	const onSubmit = async () => {
		if (name !== '' || description !== '') {
			handleClose();
		} else {
			const updatedProgram = {
				id: program.id,
				name,
				description,
			};

			const res = await updateProgram(updatedProgram);
			setPrograms((curr) =>
				curr.map((item) => (item.id === updatedProgram.id ? res : item))
			);

			setName(name);
			setDescription(description);
			setEditModal(false);
		}
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
					<Button onClick={onSubmit}>Save Changes</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditProgram;
