import React, { useEffect, useState } from 'react';
import AddProgram from '../../components/forms/AddProgram';
import { getPrograms } from '../../actions/programActions';
import ProgramsList from './ProgramsList';

const Programs = () => {
	const [programs, setPrograms] = useState([]);
	const [loading, setLoading] = useState(true);

	const runGetPrograms = async () => {
		const res = await getPrograms();
		if (res) {
			setPrograms(res);
			setLoading(false);
		}
	};

	useEffect(() => {
		runGetPrograms();
	}, []);

	return (
		<React.Fragment>
			<ProgramsList programs={programs} loading={loading} />
			<AddProgram runGetPrograms={runGetPrograms} />
		</React.Fragment>
	);
};

export default Programs;
