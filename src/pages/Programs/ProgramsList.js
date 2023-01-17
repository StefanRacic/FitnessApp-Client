import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ProgramsListItem from './ProgramsListItem';
import Spinner from '../../components/common/Spinner';

const ProgramsList = ({ programs, loading, dispatch }) => {
	const handleRemoveItem = (id) => {
		dispatch({
			type: 'remove',
			payload: id,
		});
	};

	if (loading) return <Spinner />;
	return (
		<Container sx={{ p: 20 }}>
			<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
				{programs.map((program) => {
					return (
						<ProgramsListItem
							key={program.id}
							program={program}
							handleRemoveItem={handleRemoveItem}
						/>
					);
				})}
			</Grid>
		</Container>
	);
};

export default ProgramsList;
