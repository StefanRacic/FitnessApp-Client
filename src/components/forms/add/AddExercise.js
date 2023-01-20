import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddButton from './AddButton';
import { createExercise } from '../../../actions/exerciseActions';

const AddExercise = ({ setExercises }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [open, setOpen] = React.useState(false);

	const onSubmit = async () => {
		const newExercise = {
			name,
			description,
		};
		const res = await createExercise(newExercise);
		setExercises((current) => [...current, res]);
		setName('');
		setDescription('');
		setOpen(false);
	};
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<AddButton handleClickOpen={handleClickOpen} />
			<Dialog open={open} onClose={handleClose} fullWidth={true}>
				<DialogTitle>Create new exercise</DialogTitle>
				<DialogContent>
					<DialogContentText>Lorem ipsum dolar sit.</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						value={name}
						label='Exercise Name'
						type='text'
						fullWidth
						variant='standard'
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						margin='dense'
						id='description'
						value={description}
						label='Description'
						type='text'
						fullWidth
						variant='standard'
						onChange={(e) => setDescription(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={onSubmit}>Create Exercise</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
export default AddExercise;
