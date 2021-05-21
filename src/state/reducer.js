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
		default:
			return state;
	}
}
