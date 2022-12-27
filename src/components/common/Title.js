import { Typography } from '@mui/material';
import React from 'react';
import styles from './common.module.css';

const Title = ({ title }) => {
	return (
		<Typography variant='h4' className={styles.title}>
			{title}
		</Typography>
	);
};

export default Title;
