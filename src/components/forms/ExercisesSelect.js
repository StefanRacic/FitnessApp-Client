import { Autocomplete, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';

const ExercisesSelect = ({ exercises, setExerciseId }) => {
	return (
		<Stack spacing={2}>
			<Autocomplete
				options={exercises.map((exercise) => ({
					id: exercise.id,
					label: exercise.name,
				}))}
				renderInput={(params) => (
					<TextField
						{...params}
						label='Pick Exercise'
						fullWidth={true}
						onChange={(e) => setExerciseId(e.target.value)}
					/>
				)}
			/>
		</Stack>
	);
};

export default ExercisesSelect;
