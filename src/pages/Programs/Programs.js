import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React, { useEffect, useState } from 'react';
import ProgramItem from './ProgramItem';
import ProgramsForm from '../../components/forms/ProgramsForm';
import { getPrograms } from '../../actions/programActions';

const Programs = () => {
	const [programs, setPrograms] = useState([]);
	useEffect(() => {
		const runGetPrograms = async () => {
			const res = await getPrograms();
			setPrograms(res);
		};
		runGetPrograms();
	}, []);
	return (
		<React.Fragment>
			<Container sx={{ p: 10 }}>
				<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
					{programs.map((program) => {
						return (
							<Grid key={program.id}>
								<ProgramItem />
							</Grid>
						);
					})}
				</Grid>
				<ProgramsForm />
			</Container>
		</React.Fragment>
	);
};

export default Programs;
