import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react';
import styles from '../Program/program.module.css';
import WorkoutExercises from './WorkoutExercises';
import AddWorkoutExercise from '../../components/forms/AddWorkoutExercise';
import { getWorkout } from '../../actions/workoutActions';
import { useParams } from 'react-router-dom';
import { getWorkoutExercisesByWorkoutId } from '../../actions/workoutExerciseActions';
import BannerImage from '../../components/common/BannerImage';
import Title from '../../components/common/Title';
import Description from '../../components/common/Description';

const Workout = () => {
	const { id } = useParams();

	return (
		<Fragment>
			<BannerImage />
			<Container>
				<Title title='Workout.Name' />
				<Description description='Workout.Description' />
				<Title title='Workout Exercises' />
				<WorkoutExercises workoutExercises={[]} />
				<AddWorkoutExercise />
			</Container>
		</Fragment>
	);
};

export default Workout;
