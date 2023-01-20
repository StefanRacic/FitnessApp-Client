import React from 'react';
import { Container } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Exercise from './Exercise';
import { getExercises } from '../../actions/exerciseActions';
import Spinner from '../../components/common/Spinner';
import AddExercise from '../../components/forms/add/AddExercise';
import { Typography } from '@mui/material';

const Exercises = () => {
	const {
		data: exercises,
		setData: setExercises,
		loading,
		error,
	} = getExercises();

	if (error) throw error;
	if (loading) return <Spinner />;

	return (
		<Container sx={{ p: 10 }}>
			<Grid
				container
				spacing={{ xs: 3, sm: 3 }}
				paddingBottom='5%'
				justifyContent='center'
			>
				{exercises.length ? (
					exercises.map((exercise) => {
						return (
							<Grid sm={4}>
								<Exercise exercise={exercise} setExercises={setExercises} />
							</Grid>
						);
					})
				) : (
					<Typography variant='body1'>No Exercises...</Typography>
				)}
			</Grid>
			<AddExercise setExercises={setExercises} />
		</Container>
	);
};

export default Exercises;
