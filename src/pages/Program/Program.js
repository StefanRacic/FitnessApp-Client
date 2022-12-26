import { Button, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Container, padding } from '@mui/system';
import React, { useEffect, useState } from 'react';
import styles from './program.module.css';
import Workouts from './Workouts';
import WorkoutForm from '../../components/forms/WorkoutForm';
import { useParams } from 'react-router-dom';
import { getProgram } from '../../actions/programActions';
import { getWorkoutsByProgramId } from '../../actions/workoutActions';

const Program = () => {
	const params = useParams();
	const [program, setProgram] = useState({});
	const [workouts, setWorkouts] = useState([]);
	const runGetProgram = async () => {
		const res = await getProgram(params.id);
		setProgram(res);
	};

	const runGetWorkoutsByProgramId = async () => {
		const res = await getWorkoutsByProgramId(params.id);
		setWorkouts(res);
	};

	useEffect(() => {
		runGetProgram();
		runGetWorkoutsByProgramId();
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.bannerImage}></div>
			<Container>
				<Typography variant='h4'>{program.name}</Typography>
				<Typography variant='body1'>{program.description}</Typography>
				<Typography variant='h4'>Workouts</Typography>
				<Workouts workouts={workouts} />
				<div className={styles.btnWrapper}>
					<WorkoutForm runGetWorkoutsByProgramId={runGetWorkoutsByProgramId} />
				</div>
			</Container>
		</div>
	);
};

export default Program;
