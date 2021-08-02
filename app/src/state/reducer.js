const initialState = {
  hoverTruth: 0,
  clickedTruth: 0,
  clickedNode: {
    text: null,
    additionalRefs: null,
  },
  loading: false,
  clickedElaboration: null,
  visibleElaboration: null,
  showElaborationDrawer: false,
  showAboutDrawer: false,
  showAddElaboration: false,
  showContact: false,
  snackPack: [],
  themeType: 'dark',
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
    case 'TOGGLE_CONTACT':
      return {
        ...state,
        showContact: !state.showContact,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.state,
      };
    case 'SET_SNACK_PACK':
      return {
        ...state,
        snackPack: [
          ...state.snackPack,
          {
            message: action.message,
            newContributionId: action.newContributionId,
            key: action.key,
          },
        ],
      };
    case 'SLICE_SNACK_PACK':
      return {
        ...state,
        snackPack: state.snackPack.slice(1),
      };
    case 'TOGGLE_THEME_TYPE':
      return {
        ...state,
        themeType: state.themeType === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
}
