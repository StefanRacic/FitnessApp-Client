import { Container } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react';
import Workouts from './Workouts';
import AddWorkout from '../../components/forms/AddWorkout';
import { useParams } from 'react-router-dom';
import { getProgram } from '../../actions/programActions';
import { getWorkoutsByProgramId } from '../../actions/workoutActions';
import BannerImage from '../../components/common/BannerImage';
import Title from '../../components/common/Title';
import Description from '../../components/common/Description';

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
		<Fragment>
			<BannerImage />
			<Container>
				<Title title={program.name} />
				<Description description={program.description} />
				<Title title='Workouts' />
				<Workouts workouts={workouts} />
				<AddWorkout runGetWorkoutsByProgramId={runGetWorkoutsByProgramId} />
			</Container>
		</Fragment>
	);
};

export default Program;
