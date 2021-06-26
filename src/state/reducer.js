export default function reducer(state, action) {
	switch (action.type) {
		case 'HOVER_TRUTH':
			return { ...state, hoverTruth: action.number };
		case 'CLICKED_TRUTH':
			return { ...state, clickedTruth: action.number };
		case 'CLICKED_ELABORATION':
			return { ...state, clickedElaboration: action.clickedElaboration };
		case 'VISIBLE_ELABORATION':
			return { ...state, visibleElaboration: action.visibleElaboration };
		case 'SET_SAMADHI':
			return { ...state, translations: { ...state.translations, samadhi: action.word } };
		case 'SET_SANKHARA':
			return { ...state, translations: { ...state.translations, sankhara: action.word } };
		case 'SET_VEDANA':
			return { ...state, translations: { ...state.translations, vedana: action.word } };
		case 'SET_NAMARUPA':
			return { ...state, translations: { ...state.translations, namarupa: action.word } };
		case 'SET_JHANA':
			return { ...state, translations: { ...state.translations, jhana: action.word } };
		case 'TOGGLE_ELABORATION_DRAWER':
			return { ...state, showElaborationDrawer: action.showElaborationDrawer };
		case 'TOGGLE_INFO_DRAWER':
			return { ...state, showInfoDrawer: action.showInfoDrawer };
		default:
			return state;
	}
}
