import { createContext, useReducer } from 'react';

import reducer from './reducer';

const initialState = {
	hoverTruth: 0,
	clickedTruth: 0,
	clickedElaboration: { text: null, elaboration: null, references: [] },
	visibleElaboration: { text: null, elaboration: null, references: [] },
	translations: {
		samadhi: 'stillness',
		sankhara: 'volitional formations',
		vedana: 'sensation',
		namarupa: 'mind and matter'
	}
};

export const GlobalState = createContext(initialState);

export function StateProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalState.Provider value={[state, dispatch]}>{children}</GlobalState.Provider>
	);
}
