import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { createProgram, getPrograms } from '../../actions/programActions';
import AddButton from './AddButton';

const AddProgram = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [open, setOpen] = useState(false);

	const onSubmit = async () => {
		const newProgram = {
			name,
			description,
		};
		createProgram(newProgram);
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
		<React.Fragment>
			<AddButton handleClickOpen={handleClickOpen} />
			<Dialog open={open} onClose={handleClose} fullWidth={true}>
				<DialogTitle>Create new program</DialogTitle>
				<DialogContent>
					<DialogContentText>Lorem ipsum dolar sit.</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						name='name'
						value={name}
						id='name'
						label='Program Name'
						type='text'
						fullWidth
						variant='standard'
						required
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						name='description'
						value={description}
						margin='dense'
						id='description'
						label='Description'
						type='text'
						fullWidth
						variant='standard'
						required
						onChange={(e) => setDescription(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={onSubmit}>Create Program</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

export default AddProgram;
