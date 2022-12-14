import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
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
				<Grid2 container spacing={1} justifyContent='center'>
					{exercises.length > 0 ? (
						exercises.map((exercise) => {
							return (
								<Grid2>
									<Exercise key={exercise.id} exercise={exercise} />
								</Grid2>
							);
						})
					) : (
						<div>
							<h2>No exercises...</h2>
						</div>
					)}
				</Grid2>
			</Container>
		</React.Fragment>
	);
};

export default Exercises;
