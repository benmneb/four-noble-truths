const initialState = {
  hoverTruth: 0,
  clickedTruth: 0,
  clickedNode: {
    text: null,
    additionalRefs: null,
  },
  loading: false,
  clickedElaboration: {
    text: null,
    elaboration: null,
    references: [],
    spokenBy: null,
  },
  visibleElaboration: {
    text: null,
    elaboration: null,
    references: [],
    spokenBy: null,
  },
  showElaborationDrawer: false,
  showAboutDrawer: false,
  showAddElaboration: false,
  showSnackbar: false,
  translations: {
    samadhi: 'stillness',
    sankhara: 'volitional formations',
    vedana: 'sensation',
    namarupa: 'mind and matter',
    jhana: 'jhāna',
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_HOVER_TRUTH':
      return {
        ...state,
        hoverTruth: action.number,
      };
    case 'SET_CLICKED_TRUTH':
      return {
        ...state,
        clickedTruth: action.number,
      };
    case 'SET_CLICKED_NODE':
      return {
        ...state,
        clickedNode: {
          for: action.id,
          text: action.text,
          additionalRefs: action.additionalRefs,
        },
      };
    case 'SET_CLICKED_ELABORATION':
      return {
        ...state,
        clickedElaboration: action.elaboration,
      };
    case 'SET_VISIBLE_ELABORATION':
      return {
        ...state,
        visibleElaboration: action.elaboration,
      };
    case 'SET_TRANSLATION':
      return {
        ...state,
        translations: {
          ...state.translations,
          [action.pali]: action.english,
        },
      };
    case 'TOGGLE_ELABORATION_DRAWER':
      return {
        ...state,
        showElaborationDrawer: !state.showElaborationDrawer,
      };
    case 'TOGGLE_ABOUT_DRAWER':
      return {
        ...state,
        showAboutDrawer: !state.showAboutDrawer,
      };
    case 'TOGGLE_ADD_ELABORATION':
      return {
        ...state,
        showAddElaboration: !state.showAddElaboration,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.state,
      };
    case 'TOGGLE_SNACKBAR':
      return {
        ...state,
        showSnackbar: !state.showSnackbar,
      };
    default:
      return state;
  }
}
