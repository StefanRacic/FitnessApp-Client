import React, { useEffect, useReducer } from 'react';
import AddProgram from '../../components/forms/AddProgram';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ProgramsItem from './ProgramsItem';
import Spinner from '../../components/common/Spinner';
import { getPrograms } from '../../actions/programActions';
import programsReducer from '../../reducers/programsReducer';

const initialState = {
	programs: [],
	loading: true,
	error: null,
};

const Programs = () => {
	const { data: programs, loading, error } = getPrograms();
	const [state, dispatch] = useReducer(programsReducer, initialState);

	useEffect(() => {
		dispatch({
			type: 'get_programs',
			payload: {
				programs,
				loading,
				error,
			},
		});
	}, [programs]);

	if (state.error) throw error;
	if (state.loading) return <Spinner />;

	return (
		<Container sx={{ p: 20 }}>
			<Grid container spacing={{ xs: 3, sm: 3 }} justifyContent='center'>
				{state.programs.map((program) => {
					return (
						<ProgramsItem
							key={program.id}
							program={program}
							dispatch={dispatch}
						/>
					);
				})}
			</Grid>
			<AddProgram dispatch={dispatch} />
		</Container>
	);
};

export default Programs;
