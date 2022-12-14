import { Container } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { getPrograms } from '../../services';
import Program from './Program';

const Programs = () => {
	const [programs, setPrograms] = useState([]);

	useEffect(() => {
		getPrograms().then((res) => setPrograms(res.data));
	}, []);

	return (
		<React.Fragment>
			<Container sx={{ p: 10 }}>
				<Stack direction='row' spacing={3} justifyContent='center'>
					{programs.length > 0 ? (
						programs.map((program) => {
							return <Program key={program.id} program={program} />;
						})
					) : (
						<div>
							<h2>No programs...</h2>
						</div>
					)}
				</Stack>
			</Container>
		</React.Fragment>
	);
};

export default Programs;
