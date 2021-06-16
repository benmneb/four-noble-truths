import { createContext, useContext, useReducer } from 'react';

import reducer from './reducer';

const initialState = {
	hoverTruth: 0,
	clickedTruth: 0,
	clickedElaboration: { text: null, elaboration: null, references: [] },
	visibleElaboration: { text: null, elaboration: null, references: [] },
	showElaborationDrawer: false,
	showInfoDrawer: false,
	translations: {
		samadhi: 'stillness',
		sankhara: 'volitional formations',
		vedana: 'sensation',
		namarupa: 'mind and matter'
	}
};

const GlobalState = createContext(initialState);

export function useGlobalState() {
	const [state, dispatch] = useContext(GlobalState);

	return [state, dispatch];
}

export function StateProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalState.Provider value={[state, dispatch]}>{children}</GlobalState.Provider>
	);
}
