import { mongo } from '../assets';

export function setHoverTruth(number) {
  return {
    type: 'SET_HOVER_TRUTH',
    number,
  };
}

export function setClickedTruth(number) {
  return {
    type: 'SET_CLICKED_TRUTH',
    number,
  };
}

export function setClickedNode(id, text, additionalRefs) {
  return {
    type: 'SET_CLICKED_NODE',
    id,
    text,
    additionalRefs,
  };
}

export function setClickedElaboration(elaboration) {
  return {
    type: 'SET_CLICKED_ELABORATION',
    elaboration,
  };
}

export function setVisibleElaboration(elaboration) {
  return {
    type: 'SET_VISIBLE_ELABORATION',
    elaboration,
  };
}

export function setTranslation(pali, english) {
  return {
    type: 'SET_TRANSLATION',
    pali,
    english,
  };
}

export function toggleElaborationDrawer() {
  return {
    type: 'TOGGLE_ELABORATION_DRAWER',
  };
}

export function toggleAboutDrawer() {
  return {
    type: 'TOGGLE_ABOUT_DRAWER',
  };
}

export function toggleAddElaboration() {
  return {
    type: 'TOGGLE_ADD_ELABORATION',
  };
}

export function setLoading(state) {
  return {
    type: 'SET_LOADING',
    state,
  };
}

export function setSnackPack(message, newContributionId) {
  return {
    type: 'SET_SNACK_PACK',
    message,
    newContributionId,
    key: new Date().getTime(),
  };
}

export function sliceSnackPack() {
  return {
    type: 'SLICE_SNACK_PACK',
  };
}

export function getElaborations(id) {
  return async (dispatch) => {
    try {
      const response = await mongo.get(id);
      const data = await response.data;
      dispatch(setLoading(false));
      dispatch(setClickedElaboration(data));
      dispatch(setVisibleElaboration(data));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setClickedElaboration(null));
      dispatch(setVisibleElaboration(null));
    }
  };
}
