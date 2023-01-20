import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { createWorkout } from '../../../actions/workoutActions';
import { useParams } from 'react-router-dom';
import AddButton from './AddButton';

const AddWorkout = ({ setWorkouts }) => {
	const params = useParams();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [open, setOpen] = useState(false);

	const onSubmit = async () => {
		const newWorkout = {
			name,
			description,
			programId: params.id,
		};
		const res = await createWorkout(newWorkout);
		setWorkouts((current) => [...current, res]);
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
		<div>
			<AddButton handleClickOpen={handleClickOpen} />
			<Dialog open={open} onClose={handleClose} fullWidth={true}>
				<DialogTitle>Create new workout</DialogTitle>
				<DialogContent>
					<DialogContentText>Lorem ipsum dolar sit.</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						name='name'
						value={name}
						id='name'
						label='Workout Name'
						type='text'
						fullWidth
						variant='standard'
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						margin='dense'
						id='description'
						name='description'
						value={description}
						label='Description'
						type='text'
						fullWidth
						variant='standard'
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={onSubmit}>Create Workout</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default AddWorkout;
