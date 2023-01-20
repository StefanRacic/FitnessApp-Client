import React from 'react';
import styles from '../workoutForm.module.css';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddButton = ({ handleClickOpen }) => {
	return (
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
	);
};

export default AddButton;
