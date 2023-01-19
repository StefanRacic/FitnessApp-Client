import React from 'react';
import AddProgram from '../../components/forms/AddProgram';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ProgramsItem from './ProgramsItem';
import Spinner from '../../components/common/Spinner';
import { getPrograms } from '../../actions/programActions';

const Programs = () => {
	const {
		data: programs,
		setData: setPrograms,
		loading,
		error,
	} = getPrograms();

	if (error) throw error;
	if (loading) return <Spinner />;

	return (
		<Container sx={{ p: 20 }}>
			<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
				{programs.map((program) => {
					return (
						<ProgramsItem
							key={program.id}
							program={program}
							setPrograms={setPrograms}
						/>
					);
				})}
			</Grid>
			<AddProgram setPrograms={setPrograms} />
		</Container>
	);
};

export default Programs;
