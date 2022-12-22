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

export default function WorkoutForm() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant='contained' onClick={handleClickOpen}>
				Create Workout
			</Button>
			<Dialog open={open} onClose={handleClose} fullWidth={true}>
				<DialogTitle>Create new workout</DialogTitle>
				<DialogContent>
					<DialogContentText>Lorem ipsum dolar sit.</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Workout Name'
						type='text'
						fullWidth
						variant='standard'
					/>
					<TextField
						margin='dense'
						id='description'
						label='Description'
						type='text'
						fullWidth
						variant='standard'
					/>
					<div className={styles.searchWrapper}>
						<TextField
							margin='dense'
							id='search'
							label='Search Exercises'
							type='text'
							fullWidth
							variant='standard'
						/>
					</div>
					{/* <ExerciseList /> */}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Create Workout</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
