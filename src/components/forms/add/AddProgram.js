import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { createProgram } from '../../../actions/programActions';
import AddButton from './AddButton';

const AddProgram = ({ setPrograms }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const onSubmit = async () => {
		if (name === '' || description === '') {
			handleClose();
		} else {
			const newProgram = {
				name,
				description,
			};
			const res = await createProgram(newProgram);
			setPrograms((current) => [...current, res]);
			setName('');
			setDescription('');
			setOpen(false);
		}
	};
	return (
		<>
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
					<Button onClick={onSubmit}>Create Program</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default AddProgram;
