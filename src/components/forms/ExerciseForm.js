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

export default function ExerciseForm() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<div className={styles.btnWrapper}>
				<Button variant='contained' onClick={handleClickOpen}>
					Create Exercise
				</Button>
			</div>
			<Dialog open={open} onClose={handleClose} fullWidth={true}>
				<DialogTitle>Create new exercise</DialogTitle>
				<DialogContent>
					<DialogContentText>Lorem ipsum dolar sit.</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Exercise Name'
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
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Create Exercise</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
