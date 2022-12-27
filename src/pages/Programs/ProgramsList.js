import React from 'react';
import { Container, Skeleton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ProgramsListItem from './ProgramsListItem';

const ProgramsList = ({ programs, loading }) => {
	return (
		<Container sx={{ p: 10 }}>
			<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
				{programs.map((program) => {
					return (
						<ProgramsListItem
							key={program.id}
							program={program}
							loading={loading}
						/>
					);
				})}
			</Grid>
		</Container>
	);
};

export default ProgramsList;
