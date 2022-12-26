import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './workoutForm.module.css';
import ExerciseList from './ExerciseList';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { createWorkout } from '../../actions/workoutActions';
import { useParams } from 'react-router-dom';

export default function WorkoutForm({ runGetWorkoutsByProgramId }) {
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

		setName('');
		setDescription('');

		runGetWorkoutsByProgramId();

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
			<div className={styles.btnWrapper}>
				<IconButton
					variant='outlined'
					aria-label='add new program'
					onClick={handleClickOpen}
					className={styles.btn}
				>
					<AddIcon />
				</IconButton>
			</div>
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
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={onSubmit}>Create Workout</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
