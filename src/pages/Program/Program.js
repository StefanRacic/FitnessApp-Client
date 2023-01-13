import { Container } from '@mui/system';
import React, { Fragment } from 'react';
import Workouts from './Workouts';
import AddWorkout from '../../components/forms/AddWorkout';
import { useParams } from 'react-router-dom';
import { getProgram } from '../../actions/programActions';
import BannerImage from '../../components/common/BannerImage';
import Title from '../../components/common/Title';
import Description from '../../components/common/Description';
import Spinner from '../../components/common/Spinner';

const Program = () => {
	const { id } = useParams();
	const { data: program, loading, error } = getProgram(id);

	if (error) throw error;
	if (loading) return <Spinner />;

	return (
		<Fragment>
			<BannerImage />
			<Container>
				<Title title={program.name} />
				<Description description={program.description} />
				<Title title='Workouts' />
				<Workouts programId={program.id} />
				<AddWorkout />
			</Container>
		</Fragment>
	);
};

export default Program;
