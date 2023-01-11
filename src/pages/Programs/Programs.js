import React from 'react';
import AddProgram from '../../components/forms/AddProgram';
import ProgramsList from './ProgramsList';
import Spinner from '../../components/common/Spinner';
import { getPrograms } from '../../actions/programActions';

const Programs = () => {
	const { data: programs, loading, error } = getPrograms();

	if (error) throw error;
	if (loading) return <Spinner />;

	return (
		<React.Fragment>
			<ProgramsList programs={programs} />
			<AddProgram />
		</React.Fragment>
	);
};

export default Programs;
