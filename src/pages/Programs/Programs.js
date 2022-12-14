import { Container } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Program from './Program';

const Programs = () => {
	return (
		<React.Fragment>
			<Container sx={{ p: 10 }}>
				<Stack direction='row' spacing={3} justifyContent='center'>
					<Program />
					<Program />
					<Program />
				</Stack>
			</Container>
		</React.Fragment>
	);
};

export default Programs;
