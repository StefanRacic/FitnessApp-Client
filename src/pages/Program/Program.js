import React from 'react';
import { Container } from '@mui/system';
import Workouts from './Workouts';
import { useParams } from 'react-router-dom';
import { getProgram } from '../../actions/programActions';
import BannerImage from '../../components/common/BannerImage';
import Title from '../../components/common/Title';
import Description from '../../components/common/Description';
import Spinner from '../../components/common/Spinner';
import ImagePlaceholder from '../../assets/images/placeholders/program-placeholder.jpg';

const Program = () => {
	const { id } = useParams();
	const { data: program, setData: setProgram, loading, error } = getProgram(id);

	if (error) throw error;
	if (loading) return <Spinner />;

	return (
		<>
			<BannerImage image={ImagePlaceholder} />
			<Container>
				<Title title={program.name} />
				<Description description={program.description} />
				<Title title='Workouts' />
				<Workouts programId={program.id} />
			</Container>
		</>
	);
};

export default Program;
