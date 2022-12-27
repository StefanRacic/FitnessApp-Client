import React from 'react';
import { Typography } from '@mui/material';
import styles from './common.module.css';

const Description = ({ description }) => {
	return (
		<Typography variant='body1' className={styles.description}>
			{description}
		</Typography>
	);
};

export default Description;
