export default function programsReducer(state, action) {
	switch (action.type) {
		case 'get_programs':
			return {
				programs: action.payload.programs,
				loading: action.payload.loading,
				error: action.payload.error,
			};
		case 'add': {
			return {
				programs: [...state.programs, action.payload],
				loading: false,
				error: null,
			};
		}
		case 'remove': {
			return {
				...state,
				programs: state.programs.filter(
					(program) => program.id !== action.payload
				),
			};
		}
		default:
			throw new Error('Unhandled action ' + action.type);
	}
}