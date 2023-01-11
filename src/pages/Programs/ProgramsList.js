import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ProgramsListItem from './ProgramsListItem';

const ProgramsList = ({ programs, loading }) => {
	return (
		<Container sx={{ p: 20 }}>
			<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
				{programs.map((program) => {
					return <ProgramsListItem key={program.id} program={program} />;
				})}
			</Grid>
		</Container>
	);
};

export default ProgramsList;
