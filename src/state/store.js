import { createContext, useReducer } from 'react';

import reducer from './reducer';

const initialState = {
	hoverTruth: 0,
	clickedTruth: 0,
	clickedElaboration: { text: null, elaboration: null, references: [] },
	visibleElaboration: { text: null, elaboration: null, references: [] }
};

export const Context = createContext(initialState);

export function StateProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}
