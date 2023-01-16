import React, { useEffect, useReducer, useState } from 'react';
import AddProgram from '../../components/forms/AddProgram';
import ProgramsList from './ProgramsList';
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

	const handleAddProgram = (program) => {
		dispatch({
			type: 'add',
			payload: program,
		});
	};

	const handleRemoveProgram = (id) => {
		dispatch({
			type: 'remove',
			payload: id,
		});
	};

	if (state.error) throw error;
	if (state.loading) return <Spinner />;

	return (
		<>
			<ProgramsList programs={state.programs} loading={loading} />
			<AddProgram handleAddProgram={handleAddProgram} />
		</>
	);
};

export default Programs;
