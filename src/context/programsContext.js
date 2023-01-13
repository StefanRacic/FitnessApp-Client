import React, { useReducer } from 'react';
import { createContext } from 'react';

const ProgramContext = createContext(null);

let initialPrograms = [];

export function ProgramsProvider(props) {
	const [programs, dispatch] = useReducer(programsReducer, initialPrograms);
}
