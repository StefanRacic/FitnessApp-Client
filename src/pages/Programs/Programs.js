import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Stack } from '@mui/system';
import React from 'react';
import ProgramItem from './ProgramItem';

const Programs = () => {
	return (
		<React.Fragment>
			<Container sx={{ p: 10 }}>
				<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
					<Grid>
						<ProgramItem />
					</Grid>
					<Grid>
						<ProgramItem />
					</Grid>
					<Grid>
						<ProgramItem />
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Programs;
