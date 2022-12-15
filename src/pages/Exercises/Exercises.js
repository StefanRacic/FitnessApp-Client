import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { getExercies } from '../../services';
import Exercise from './Exercise';

const Exercises = () => {
	const [exercises, setExercises] = useState([]);
	useEffect(() => {
		getExercies().then((res) => setExercises(res.data));
	}, []);
	return (
		<React.Fragment>
			<Container sx={{ p: 10 }}>
				<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
					<Grid sm={4}>
						<Exercise />
					</Grid>
					<Grid sm={4}>
						<Exercise />
					</Grid>
					<Grid sm={4}>
						<Exercise />
					</Grid>
					<Grid sm={4}>
						<Exercise />
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Exercises;
