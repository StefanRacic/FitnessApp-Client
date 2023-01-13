import React from 'react';
import Exercise from './Exercise';
import { Container } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const ExercisesList = ({ exercises }) => {
	return (
		<Container sx={{ p: 10 }}>
			<Grid
				container
				spacing={{ xs: 3, sm: 3 }}
				paddingBottom='5%'
				justifyContent='center'
			>
				{exercises.map((exercise) => {
					return (
						<Grid sm={4}>
							<Exercise exercise={exercise} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default ExercisesList;
